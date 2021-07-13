import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TreeComponent } from './tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptor } from "./services/auth.interceptor";
import { Tree2Component } from './tree2/tree2.component';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatMenuModule } from "@angular/material/menu";
import { TreeMenuComponent } from './tree-menu/tree-menu.component';
import { AddObjectComponent } from './actions-with-objects/add-object/add-object.component';
import { InfoObjectComponent } from './actions-with-objects/info-object/info-object.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatOptionModule } from "@angular/material/core";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { DeleteObjectComponent } from './actions-with-objects/delete-object/delete-object.component';
import { TestsComponent } from './tests/tests.component';
import { QueryComponent } from './tests/query/query.component';
import { EditObjectComponent } from './actions-with-objects/edit-object/edit-object.component';
import { ChangeActivityComponent } from './tests/change-activity/change-activity.component';
import { TestCommandsComponent } from './tests/test-commands/test-commands.component';
import { TestEventsComponent } from './tests/test-events/test-events.component';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        TreeComponent,
        Tree2Component,
        TreeMenuComponent,
        AddObjectComponent,
        InfoObjectComponent,
        DeleteObjectComponent,
        TestsComponent,
        QueryComponent,
        EditObjectComponent,
        ChangeActivityComponent,
        TestCommandsComponent,
        TestEventsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatTreeModule,
        HttpClientModule,
        MatProgressBarModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatCheckboxModule,
        FormsModule,
        MatProgressSpinnerModule,
        ReactiveFormsModule
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
