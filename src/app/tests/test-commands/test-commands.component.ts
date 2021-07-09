import { Component, OnInit } from '@angular/core';
import { APACSStabService } from "../../services/APACS-stab.service";
import { FormControl } from "@angular/forms";
import { TAplAIM4SLContr, TAplAIMReader, TAplSCSocket } from "../../models/APACSInterfaces";

@Component({
    selector: 'app-test-commands',
    templateUrl: './test-commands.component.html',
    styleUrls: ['./test-commands.component.scss']
})
export class TestCommandsComponent implements OnInit {
    sysAddrID = new FormControl('');


    constructor(private api: APACSStabService) {
    }

    async testCommand(sysAddrID: String) {
        let newDeviceProps = await this.api.getObjectForAdd(sysAddrID, "TAplSCSocket").toPromise() as TAplSCSocket;
        let strIPName = "192.168.0.160"
        let strIPPortName = "3001"
        newDeviceProps.strIPPortName = strIPPortName
        newDeviceProps.strIPName = strIPName
        newDeviceProps.strName = strIPName + ":" + strIPPortName
        newDeviceProps.strAlias = "socketSC"
        let newDevices = await this.api.addObject(sysAddrID, newDeviceProps).toPromise() as TAplSCSocket;

        let newObjProps1 = await this.api.getObjectForAdd(newDevices.sysAddrID, "TAplAIM4SLContr").toPromise() as TAplAIM4SLContr;
        newObjProps1.strName = "Контроллер AIM-4SL"
        let newController = await this.api.addObject(newDevices.sysAddrID, newObjProps1).toPromise() as TAplAIM4SLContr;

        let typeID = "TAplAIMReader"
        for (let i = 0; i < 4; i++) {
            let newObjProp2 = await this.api.getObjectForAdd(newController.sysAddrID, typeID).toPromise() as TAplAIMReader;
            newObjProp2.strName = "Считыватель AIM " + i
            if (i == 0) {
                newObjProp2.strAlias = "readerAlias"
            }
            let newReader = await this.api.addObject(newController.sysAddrID, newObjProp2).toPromise() as TAplAIMReader;
        }
    }

    async execCmdOnReader() {
        let obj = await this.api.getObjectByAlias("readerAlias").toPromise() as TAplAIMReader;
        if (obj) {
            this.api.execCmdOnObj(obj.sysAddrID, 'cmdLock').toPromise().then(value => console.log(value), reason => console.log(reason))
        }
    }

    async delSocket() {
        let obj = await this.api.getObjectByAlias("socketSC").toPromise() as TAplSCSocket;
        if (obj) {
            this.api.deleteObject(obj.sysAddrID).toPromise().then(value => console.log(value), reason => console.log(reason))
        }
    }

    ngOnInit(): void {
    }

}
