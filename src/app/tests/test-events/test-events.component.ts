import { Component, OnInit } from '@angular/core';
import { APACSStabService } from "../../services/APACS-stab.service";

@Component({
  selector: 'app-test-events',
  templateUrl: './test-events.component.html',
  styleUrls: ['./test-events.component.scss']
})
export class TestEventsComponent implements OnInit {

  constructor(private api: APACSStabService) {
  }

  async createEvent() {
    console.log('    --------------------------------------------------------------------\n' +
      '    Пример: Пример регистрации события коррекции УРВ\n' +
      '      Предварительно назначьте виртуальному считывателю\n' +
      '      псевдоним tna_reader, \n' +
      '      владельцу карты, для которого регистрируется сообщение коррекции - \n' +
      '      псевдоним cardHolder\n' +
      '    --------------------------------------------------------------------\'\'\'')
    let tnaReader = await this.api.getObjectByAlias('readerAlias').toPromise();
    console.log('Получен виртуальный считыватель:', tnaReader.strName);

    let cardHolder = await this.api.getObjectByAlias('cardHolder').toPromise();
    console.log('Получен владелец карты:', cardHolder.strName)

    let typeID = "TApcCardHolderAccess_Correction"
    let event2Register = await this.api.getEventForAdd(typeID).toPromise();
    console.log(`Список свойств по умолчанию для события типа ${typeID}:`, event2Register)

    event2Register["SysAddrInitObj"] = tnaReader["sysAddrID"]
    event2Register["strInitObjName"] = tnaReader["strName"]
    event2Register["SysAddrHolder"] = cardHolder["sysAddrID"]
    event2Register["strHolderName"] = cardHolder["strName"]
    event2Register["dtRealDateTime"] = (new Date()).toISOString().slice(0, 19)

    console.log('контейнер на добавление:', event2Register)

    console.log('Регистрируем событие')
    let eventID = await this.api.addEvent(event2Register).toPromise();
    console.log('Идентификатор события:', eventID.sysAddrID)

    console.log('Зачитаем событие')
    let result = await this.api.getEvent(eventID.sysAddrID, typeID).toPromise();
    console.log('Зачитанное событие:', result)
  }

  async deleteEvents() {
    console.log('    --------------------------------------------------------------------\n' +
      '    Пример: Пример вычитки всех событий коррекции и их удаление из базы\n' +
      '    --------------------------------------------------------------------')
    console.log("Зачитаем из базы события коррекции ранее указанной даты");
    let eventType2Delete = 'TApcCardHolderAccess_Correction';
    let query = {
      "select": "*",
      "from": eventType2Delete,
      "where": {"=": ["strEventTypeID", eventType2Delete]}
    }
    let openQueryRes = await this.api.openQuery(query).toPromise();
    console.log('Результат выполнения', openQueryRes)
    let eof = openQueryRes.eof;
    let batchSize = 10;
    while (!eof) {
      let data = await this.api.fetchQuery(openQueryRes.queryID, batchSize).toPromise();
      eof = data.eof
      console.log('вычитана пачка', data)
      let eventIDIndex = data.header_props.indexOf('SysAddrEventID');
      data.data.forEach(rec => {
        let eventID = rec[eventIDIndex];
        console.log('Удаляем событие', eventID);
        this.api.deleteEvent(eventID, eventType2Delete).subscribe();
      })
    }
    this.api.deleteQuery(openQueryRes.queryID).subscribe()
    console.log('Выполнено успешно')
  }

  ngOnInit(): void {
  }

}
