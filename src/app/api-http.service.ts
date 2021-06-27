import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Config, TreeChild, RootData } from "../assets/interfaces";
import { Observable } from "rxjs";


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

    getRoot(): Observable<RootData> {
        const req = `${this.url}/object/root/`
        return this.http.get<RootData>(req);
    }

    getChild(id: string): Observable<TreeChild[]> {
        const req = `${this.url}/object/children/${ApiHttpService.formatId(id)}`;
        return this.http.get<TreeChild[]>(req);
    }

    getConfigId(id: string): Observable<Config> {
        const req = `${this.url}/object/id/${ApiHttpService.formatId(id)}`;
        return this.http.get<Config>(req);
    }

    getConfigAlias(alias: string) {
        const req = `${this.url}/object/alias/${ApiHttpService.formatId(alias)}`;
        return this.http.get<any>(req).subscribe(data => console.log(data));
    }
}
