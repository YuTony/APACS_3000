import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { APACSStabService } from "../../services/APACS-stab.service";

@Component({
    selector: 'app-change-activity',
    templateUrl: './change-activity.component.html',
    styleUrls: ['./change-activity.component.scss']
})
export class ChangeActivityComponent implements OnInit {

    sysAddrID = new FormControl("");

    constructor(private api: APACSStabService) {
    }

    onChange(sysAddrID: String) {
        this.api.getObjectById(sysAddrID).toPromise().then(value => {
            if ("fActive" in value) {
                this.api.editObject(sysAddrID, {"fActive": !value.fActive}).subscribe();
                console.log(!value.fActive);
            }
        }, reason => {
            console.log(reason);
        });

    }

    ngOnInit(): void {
    }

}
