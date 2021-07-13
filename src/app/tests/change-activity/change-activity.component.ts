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

    firstName = ''
    lastName = ''

    constructor(private api: APACSStabService) {
    }

    async searchCardHolder(lastName: string, firstName: string) {
        let query = {
            "select": ["sysAddrID"],
            "from": "TApcCardHolder",
            "where": {"and": [{"=": ["strFirstName", firstName]},
                    {"=": ["strLastName", lastName]}]},
        }

        let openQueryRes =await this.api.openQuery(query).toPromise();
        if (!openQueryRes.eof) {
            let data = await this.api.fetchQuery(openQueryRes.queryID, 1).toPromise()
            this.api.deleteQuery(openQueryRes.queryID)
            let indexSA = 0
            let sysAddrID = data.data[indexSA][0]
            console.log(`Найден владелец карты с сисадресом ${sysAddrID}`)
            return sysAddrID
        }
        throw `Владелец карты ${lastName} ${firstName} не найден`
    }

    async onChange() {
        console.log(`
    --------------------------------------------------------------------
    Пример: Задание активности пользователя с указанными Фамилией и Именем
    --------------------------------------------------------------------`)
        let sysAddrID = await this.searchCardHolder(this.lastName, this.firstName)
        this.api.getObjectById(sysAddrID).subscribe(value => {
            if ("fActive" in value) {
                this.api.editObject(sysAddrID, {"fActive": !value.fActive}).subscribe();
                console.log(`Активность владельца ${this.lastName} ${this.firstName} установлена на:`, !value.fActive);
            }
        }, error => {
            console.log(error);
        })

    }

    ngOnInit(): void {
    }

}
