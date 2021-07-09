import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Types } from "../models/APACSInterfaces";
import { Action, Actions } from "../models/interfaces";

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

    object: Types | undefined;
    action: Actions | undefined;

    actionHandler(action: Action) {
        this.object = action.object;
        this.action = action.action;
        // console.log(action.action)
    }

    cancelFunc() {
        this.action = undefined;
    }

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    constructor(private breakpointObserver: BreakpointObserver) {
    }
}
