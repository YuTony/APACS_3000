import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { RootData, TreeChild, Types } from "../assets/interfaces";
import { Observable } from "rxjs";

export interface TError {
    errCode: Number,
    errText: String
}

export interface TObjectId {
    sysAddrID: String;
}

export interface TObjectsId {
    sysAddrID: String[];
}

export interface TQuery {
    select: String[];
    from: String;
    where?: any;
    "order by"?: Map<String, String>;
}

export interface TQueryId {
    queryID: String;
    eof: Boolean
}

export interface TQueryRes {
    header: String[];
    data: any;
    eof: Boolean;
}

export interface TEventSub {
    "eventTypes": String;
    "objTypes": String;
    "srvStates"?: Boolean;
    "srvStates_stillOnline"?: Boolean;
    "localEventBuffer": Number;
}

@Injectable({
    providedIn: 'root'
})
export class ApiHttpService {
    url = '/v1/webapi/v3';

    constructor(private http: HttpClient) {
    }

    private static formatId(id: String) {
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

    getObjectById(id: string): Observable<Types> {
        const req = `${this.url}/object/id/${ApiHttpService.formatId(id)}`;
        return this.http.get<Types>(req);
    }

    getObjectByAlias(alias: string): Observable<Types> {
        const req = `${this.url}/object/alias/${ApiHttpService.formatId(alias)}`;
        return this.http.get<any>(req);
    }

    getParent(id: string): Observable<TreeChild> {
        const req = `${this.url}/object/parentSA/${ApiHttpService.formatId(id)}`;
        return this.http.get<TreeChild>(req);
    }

    getObjectForAdd(parentId: string, typeForAdd: string): Observable<Types> {
        const req = `${this.url}/object/forAdd/${ApiHttpService.formatId(parentId)}/${typeForAdd}`;
        return this.http.get<Types>(req);
    }

    getEvent(eventId: string, eventType: string): Observable<any> {
        const req = `${this.url}/event/id/${ApiHttpService.formatId(eventId)}/${eventType}`;
        return this.http.get<any>(req);
    }

    getEventForAdd(eventType: string): Observable<any> {
        const req = `${this.url}/event/forAdd/${eventType}`;
        return this.http.get(req);
    }

    getErrorCode(code: number): Observable<TError> {
        const req = `${this.url}/error/${code}`;
        return this.http.get<TError>(req);
    }

    execCmdOnObj(objId: string, cmdId: string, data: any = undefined) {
        const req = `${this.url}/object/execCmd/${ApiHttpService.formatId(objId)}/${cmdId}`;
        return this.http.put(req, data);
    }

    editObject(objId: string, data: any) {
        const req = `${this.url}/object/id/${ApiHttpService.formatId(objId)}`;
        return this.http.put(req, data);
    }

    deleteObject(objId: string) {
        const req = `${this.url}/object/id/${ApiHttpService.formatId(objId)}`;
        return this.http.delete(req);
    }

    deleteEvent(eventId: string, eventType: string) {
        const req = `${this.url}/event/id/${ApiHttpService.formatId(eventId)}/${eventType}`;
        return this.http.delete(req);
    }

    addObject(parentId: string, obj: Types): Observable<TObjectId> {
        const req = `${this.url}/object/id/${ApiHttpService.formatId(parentId)}`;
        return this.http.post<TObjectId>(req, obj);
    }

    addEvent(event: Types): Observable<TObjectId> {
        const req = `${this.url}/event/id/`;
        return this.http.post<TObjectId>(req, event);
    }

    openQuery(query: TQuery): Observable<TQueryId> {
        const req = `${this.url}/query`;
        return this.http.post<TQueryId>(req, query);
    }

    fetchQuery(queryId: String, maxBatchSize: Number): Observable<TQueryRes> {
        const req = `${this.url}/query/${queryId}/${maxBatchSize}`;
        return this.http.get<TQueryRes>(req);
    }

    deleteQuery(queryId: String) {
        const req = `${this.url}/query/${queryId}`;
        return this.http.delete(req);
    }

    getObjects(objectsId: String[]): Observable<Types[]> {
        const req = `${this.url}/objects/get`;
        return this.http.post<Types[]>(req, objectsId);
    }

    deleteObjects(objectsId: String[]) {
        const req = `${this.url}/objects/del`;
        return this.http.post(req, objectsId);
    }

    addObjects(parentId: String, objects: Types[]): Observable<TObjectsId> {
        const req = `${this.url}/objects/add/${ApiHttpService.formatId(parentId)}`;
        return this.http.post<TObjectsId>(req, objects);
    }

    editObjects(data: any) {
        const req = `${this.url}/objects/edit`;
        return this.http.post(req, data);
    }

    subSdkToEvents() {

    }

    unsubSdkFromEvents() {

    }
}
