import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface TLogin {
    login: string,
    password: string
}

export interface TToken {
    token: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    url = 'http://localhost:7010/v1/webapi/v3/session/login';

    constructor(private http: HttpClient) {
    }

    login(data: TLogin) {
        return this.http.post<TToken>(this.url, data);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    logout() {
        this.http.delete(this.url);
        localStorage.removeItem('token');
    }
}
