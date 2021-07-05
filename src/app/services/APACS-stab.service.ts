import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { TApcRoot, Types } from "../models/APACSInterfaces";
import { Observable } from "rxjs";
import { TreeChild } from "../models/interfaces";

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

export  interface TWebhookSubscribe {
    "url_events" : String;
    "url_notifies" : String;
    "url_states" : String;
    "replyTO": 1000;
}

export interface TInitRMQproducer {
    "host" : String;
    "port" : Number;
    "login" : String;
    "password": String;
}

export interface TSubRMQproducer {
    "events": {
        "exchange" : String,
        "routing_key": String,
    },
    "notifies": {
        "exchange" : String,
        "routing_key" : String,
    },
    "states": {
        "exchange" : String,
        "routing_key" : String,
    }
}

export interface TPing {
    "time": String;
    "state": String;
}

@Injectable({
    providedIn: 'root'
})
export class APACSStabService {
    url = '/v1/webapi/v3';

    constructor(private http: HttpClient) {
    }

    private static formatId(id: String) {
        return id.replace(' ', '%20');
    }

    getRoot(): Observable<TApcRoot> {
        const req = `${this.url}/object/root/`
        return this.http.get<TApcRoot>(req);
    }

    getChild(id: String): Observable<TreeChild[]> {
        const req = `${this.url}/object/children/${APACSStabService.formatId(id)}`;
        return this.http.get<TreeChild[]>(req);
    }

    getObjectById(id: String): Observable<Types> {
        const req = `${this.url}/object/id/${APACSStabService.formatId(id)}`;
        return this.http.get<Types>(req);
    }

    getObjectByAlias(alias: string): Observable<Types> {
        const req = `${this.url}/object/alias/${APACSStabService.formatId(alias)}`;
        return this.http.get<any>(req);
    }

    getParent(id: string): Observable<TreeChild> {
        const req = `${this.url}/object/parentSA/${APACSStabService.formatId(id)}`;
        return this.http.get<TreeChild>(req);
    }

    getObjectForAdd(parentId: String, typeForAdd: string): Observable<Types> {
        const req = `${this.url}/object/forAdd/${APACSStabService.formatId(parentId)}/${typeForAdd}`;
        return this.http.get<Types>(req);
    }

    getEvent(eventId: string, eventType: string): Observable<any> {
        const req = `${this.url}/event/id/${APACSStabService.formatId(eventId)}/${eventType}`;
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
        const req = `${this.url}/object/execCmd/${APACSStabService.formatId(objId)}/${cmdId}`;
        return this.http.put(req, data);
    }

    editObject(objId: string, data: any) {
        const req = `${this.url}/object/id/${APACSStabService.formatId(objId)}`;
        return this.http.put(req, data);
    }

    deleteObject(objId: string) {
        const req = `${this.url}/object/id/${APACSStabService.formatId(objId)}`;
        return this.http.delete(req);
    }

    deleteEvent(eventId: string, eventType: string) {
        const req = `${this.url}/event/id/${APACSStabService.formatId(eventId)}/${eventType}`;
        return this.http.delete(req);
    }

    addObject(parentId: string, obj: Types): Observable<TObjectId> {
        const req = `${this.url}/object/id/${APACSStabService.formatId(parentId)}`;
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
        const req = `${this.url}/objects/add/${APACSStabService.formatId(parentId)}`;
        return this.http.post<TObjectsId>(req, objects);
    }

    editObjects(data: any) {
        const req = `${this.url}/objects/edit`;
        return this.http.post(req, data);
    }

    subSdkToEvents(params: TEventSub) {
        const req = `${this.url}/event/subscribe`;
        return this.http.put(req, params);
    }

    unsubSdkFromEvents() {
        const req = `${this.url}/event/subscribe`;
        return this.http.put(req, undefined);
    }

    getRecentEvent() {
        const req = `${this.url}/event/recent`;
        return this.http.get(req);
    }

    getEventsAfter(eventId: String, size: Number): Observable<any> {
        const req = `${this.url}/event/after/${APACSStabService.formatId(eventId)}/${size}`;
        return this.http.get(req);
    }

    webhooKEventSubscribe(params: TWebhookSubscribe) {
        const req = `${this.url}/callback/webhook/subscribe`;
        return this.http.put(req, params);
    }

    webhooKEventUnubscribe() {
        const req = `${this.url}/callback/webhook/unsubscribe`;
        return this.http.put(req, undefined);
    }

    initRMQProducer(params: TInitRMQproducer) {
        const req = `${this.url}/callback/rmq/init`;
        return this.http.put(req, params);
    }

    subToRMQ(params: TSubRMQproducer) {
        const req = `${this.url}/callback/rmq/subscribe`;
        return this.http.put(req, params);
    }

    unsubToRMQ() {
        const req = `${this.url}/callback/rmq/unsubscribe`;
        return this.http.put(req, undefined);
    }

    getActiveCallbacks(): Observable<any> {
        const req = `${this.url}/webapi/active_callbacks`;
        return this.http.get(req);
    }

    ping(): Observable<TPing> {
        const req = `${this.url}/ping`;
        return this.http.put<TPing>(req, undefined);
    }
}
