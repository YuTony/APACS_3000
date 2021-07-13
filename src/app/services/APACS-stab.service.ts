import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { TApcRoot, Types } from "../models/APACSInterfaces";
import { Observable } from "rxjs";
import { TreeChild } from "../models/interfaces";

export interface TError {
  errCode: number,
  errText: string
}

export interface TObjectId {
  sysAddrID: string;
}

export interface TObjectsId {
  sysAddrID: string[];
}

export interface TQuery {
  select: string[] | string;
  from: string;
  where?: any;
  "order by"?: { [key: string]: "desc" | "asc" };
}

export interface TQueryId {
  queryID: string;
  eof: Boolean
}

export interface TQueryRes {
  header_props: string[];
  data: Array<Array<any>>;
  eof: Boolean;
}

export interface TEventSub {
  "eventTypes": string;
  "objTypes": string;
  "srvStates"?: Boolean;
  "srvStates_stillOnline"?: Boolean;
  "localEventBuffer": number;
}

export interface TWebhookSubscribe {
  "url_events": string;
  "url_notifies": string;
  "url_states": string;
  "replyTO": number;
}

export interface TInitRMQproducer {
  "host": string;
  "port": number;
  "login": string;
  "password": string;
}

export interface TSubRMQproducer {
  "events": {
    "exchange": string,
    "routing_key": string,
  },
  "notifies": {
    "exchange": string,
    "routing_key": string,
  },
  "states": {
    "exchange": string,
    "routing_key": string,
  }
}

export interface TPing {
  "time": string;
  "state": string;
}

@Injectable({
  providedIn: 'root'
})
export class APACSStabService {
  url = '/v1/webapi/v3';

  constructor(private http: HttpClient) {
  }

  private static formatId(id: string) {
    return id.replace(' ', '%20');
  }

  getRoot(): Observable<TApcRoot> {
    const req = `${this.url}/object/root/`
    return this.http.get<TApcRoot>(req);
  }

  getParent(id: string): Observable<TreeChild> {
    const req = `${this.url}/object/parentSA/${APACSStabService.formatId(id)}`;
    return this.http.get<TreeChild>(req);
  }

  getChild(id: string): Observable<TreeChild[]> {
    const req = `${this.url}/object/children/${APACSStabService.formatId(id)}`;
    return this.http.get<TreeChild[]>(req);
  }

  getObjectById(id: string): Observable<Types> {
    const req = `${this.url}/object/id/${APACSStabService.formatId(id)}`;
    return this.http.get<Types>(req);
  }

  getObjectByAlias(alias: string): Observable<Types> {
    const req = `${this.url}/object/alias/${APACSStabService.formatId(alias)}`;
    return this.http.get<any>(req);
  }

  getObjects(objectsId: string[]): Observable<Types[]> {
    const req = `${this.url}/objects/get`;
    return this.http.post<Types[]>(req, objectsId);
  }

  getObjectForAdd(parentId: string, typeForAdd: string): Observable<Types> {
    const req = `${this.url}/object/forAdd/${APACSStabService.formatId(parentId)}/${typeForAdd}`;
    return this.http.get<Types>(req);
  }

  addObject(parentId: string, obj: Types): Observable<TObjectId> {
    const req = `${this.url}/object/id/${APACSStabService.formatId(parentId)}`;
    return this.http.post<TObjectId>(req, obj);
  }

  addObjects(parentId: string, objects: Types[]): Observable<TObjectsId> {
    const req = `${this.url}/objects/add/${APACSStabService.formatId(parentId)}`;
    return this.http.post<TObjectsId>(req, objects);
  }

  editObject(objId: string, data: any) {
    const req = `${this.url}/object/id/${APACSStabService.formatId(objId)}`;
    return this.http.put(req, data);
  }

  editObjects(data: any) {
    const req = `${this.url}/objects/edit`;
    return this.http.post(req, data);
  }

  deleteObject(objId: string) {
    const req = `${this.url}/object/id/${APACSStabService.formatId(objId)}`;
    return this.http.delete(req);
  }

  deleteObjects(objectsId: string[]) {
    const req = `${this.url}/objects/del`;
    return this.http.post(req, objectsId);
  }

  getEvent(eventId: string, eventType: string): Observable<any> {
    const req = `${this.url}/event/id/${APACSStabService.formatId(eventId)}/${eventType}`;
    return this.http.get<any>(req);
  }

  getEventForAdd(eventType: string): Observable<any> {
    const req = `${this.url}/event/forAdd/${eventType}`;
    return this.http.get(req);
  }

  addEvent(event: Types): Observable<TObjectId> {
    const req = `${this.url}/event/id/`;
    return this.http.post<TObjectId>(req, event);
  }

  deleteEvent(eventId: string, eventType: string) {
    const req = `${this.url}/event/id/${APACSStabService.formatId(eventId)}/${eventType}`;
    return this.http.delete(req);
  }

  getErrorCode(code: number): Observable<TError> {
    const req = `${this.url}/error/${code}`;
    return this.http.get<TError>(req);
  }

  execCmdOnObj(objId: string, cmdId: string, data: any = undefined) {
    const req = `${this.url}/object/execCmd/${APACSStabService.formatId(objId)}/${cmdId}`;
    return this.http.put(req, data);
  }

  openQuery(query: TQuery): Observable<TQueryId> {
    const req = `${this.url}/query`;
    return this.http.post<TQueryId>(req, query);
  }

  fetchQuery(queryId: string, maxBatchSize: number): Observable<TQueryRes> {
    const req = `${this.url}/query/${queryId}/${maxBatchSize}`;
    return this.http.get<TQueryRes>(req);
  }

  deleteQuery(queryId: string) {
    const req = `${this.url}/query/${queryId}`;
    return this.http.delete(req);
  }

  subSdkToEvents(params: TEventSub) {
    const req = `${this.url}/event/subscribe`;
    return this.http.put(req, params);
  }

  getEventsAfter(eventId: string, size: number): Observable<any> {
    const req = `${this.url}/event/after/${APACSStabService.formatId(eventId)}/${size}`;
    return this.http.get(req);
  }

  unsubSdkFromEvents() {
    const req = `${this.url}/event/subscribe`;
    return this.http.put(req, undefined);
  }

  getRecentEvent() {
    const req = `${this.url}/event/recent`;
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
