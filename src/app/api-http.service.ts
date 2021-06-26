import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Config, ListItem, RootData } from "../assets/interfaces";


@Injectable({
    providedIn: 'root'
})
export class ApiHttpService {
    url = '/v1/webapi/v3';

    constructor(private http: HttpClient) {
    }

    private static formatId(id: string) {
        return id.replace(' ', '%20');
    }

    getRoot() {
        const req = `${this.url}/object/root/`
        return this.http.get<RootData>(req);
    }

    getChild(id: string) {
        const req = `${this.url}/object/children/${ApiHttpService.formatId(id)}`;
        return this.http.get<ListItem[]>(req);
    }

    getConfigId(id: string) {
        const req = `${this.url}/object/id/${ApiHttpService.formatId(id)}`;
        return this.http.get<Config>(req);
    }

    getConfigAlias(alias: string) {
        const req = `${this.url}/object/alias/${ApiHttpService.formatId(alias)}`;
        return this.http.get<any>(req).subscribe(data => console.log(data));
    }
}
