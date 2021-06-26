import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    url = 'http://localhost:7010/v1/webapi/v3/';
    loginData = {
        login: 'inst',
        password: ''
    }

    constructor(private http: HttpClient) {
    }

    loginUser() {
        let loginRequest = `${this.url}/session/login`;
        return this.http.post<any>(loginRequest, this.loginData);
    }

    getToken() {
        return localStorage.getItem('token');
    }
}
