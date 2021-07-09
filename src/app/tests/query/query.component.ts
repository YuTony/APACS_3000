import { Component, OnInit } from '@angular/core';
import { APACSStabService, TQuery, TQueryRes } from "../../services/APACS-stab.service";

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {

  query: TQuery = {
    "select": ["strFirstName", "strLastName", "sysAddrID", "bStatus"],
    "from": "TApcCardHolder",
    "order by": {"strLastName": "asc"}
  }

  queryRes: TQueryRes | undefined;

  constructor(private api: APACSStabService) { }

  ngOnInit(): void {
  }

  async getQuery(query: TQuery) {
    let queryId = await this.api.openQuery(query).toPromise();
    this.queryRes = await this.api.fetchQuery(queryId.queryID, 30).toPromise();
    console.log(this.queryRes);
    this.api.deleteQuery(queryId.queryID)
  }
}
