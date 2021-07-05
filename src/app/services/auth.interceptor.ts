import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from "./auth.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {
    }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        if (!request.url.match('login')) {
            const token = this.auth.getToken();
            request = request.clone({
                setHeaders: {
                    'Authorization': `token ${token}`
                }
            });
        }
        // else
        // console.log('login');
        // console.log(request);
        return next.handle(request);
    }
}
