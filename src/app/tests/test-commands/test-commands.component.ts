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

  async addCommand(sysAddrID: string) {
    console.log(`
    ------------------------------------------------------------
    Пример: Добавление контроллера и загрузка конфигурации
    ------------------------------------------------------------`)
    let typeID = "TAplSCSocket";
    let newDeviceProps = await this.api.getObjectForAdd(sysAddrID, typeID).toPromise() as TAplSCSocket;
    console.log(`получили дефолтные свойства для типа ${typeID}:`, newDeviceProps);

    let strIPName = "192.168.0.160"
    let strIPPortName = "3001"
    newDeviceProps.strIPPortName = strIPPortName
    newDeviceProps.strIPName = strIPName
    newDeviceProps.strName = strIPName + ":" + strIPPortName
    newDeviceProps.strAlias = "socketSC"
    let newDevices = await this.api.addObject(sysAddrID, newDeviceProps).toPromise() as TAplSCSocket;
    let newDevicesSA = newDevices.sysAddrID

    console.log(`добавили объект:`, newDeviceProps)
    console.log(`сисадрес нового объекта: ${newDevicesSA}`)

    typeID = "TAplAIM4SLContr"
    let newObjProps1 = await this.api.getObjectForAdd(newDevicesSA, typeID).toPromise() as TAplAIM4SLContr;

    console.log(`получили дефолтные свойства для типа ${typeID}`, newObjProps1)

    newObjProps1.strName = "Контроллер AIM-4SL"
    let newController = await this.api.addObject(newDevicesSA, newObjProps1).toPromise() as TAplAIM4SLContr;
    let newContrSA = newController.sysAddrID

    console.log(`к объекту ${newDevicesSA} добавили объект:'`, newObjProps1)
    console.log(`сисадрес нового объекта: ${newContrSA}`)

    typeID = "TAplAIMReader"
    for (let i = 0; i < 4; i++) {
      let newObjProp2 = await this.api.getObjectForAdd(newController.sysAddrID, typeID).toPromise() as TAplAIMReader;
      let nameReader = "Считыватель AIM " + i
      newObjProp2.strName = nameReader
      if (i == 0) {
        newObjProp2.strAlias = "readerAlias"
      }
      let newReader = await this.api.addObject(newController.sysAddrID, newObjProp2).toPromise() as TAplAIMReader;
      console.log(`${nameReader} сисадрес считывателя: ${newReader.sysAddrID}`)
    }
  }

  async execCmdOnReader() {
    this.api.getObjectByAlias("readerAlias").subscribe((value) => {
      let obj = value as TAplAIMReader;
      this.api.execCmdOnObj(obj.sysAddrID, 'cmdLock').subscribe(() => {
        console.log('Команда успешно выполнена')
      }, error => {
        console.error('Ошибка:', error.error)
      })
    }, error => {
      console.error('Ошибка:', error)
      console.error('Скорее всего не задан псевдоним readerAlias на считывателе.\nЗадайте и повторите выполнение')
    })
  }

  async delSocket() {
    let obj = await this.api.getObjectByAlias("socketSC").toPromise() as TAplSCSocket;
    if (obj) {
      this.api.deleteObject(obj.sysAddrID).toPromise().then(
        () => console.log("Удаление успешно выполнено"),
        reason => console.log("Ошибка", reason))
    }
  }

  ngOnInit(): void {
  }

}
