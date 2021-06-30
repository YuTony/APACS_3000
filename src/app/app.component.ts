import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'APACS-test2';

    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        this.auth.login({login: 'inst', password: ''})
            .subscribe(
                res => localStorage.setItem('token', res.token),
                err => console.log(err)
            );
    }
}
