import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ActionReducer, StoreModule} from "@ngrx/store";

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {CoreModule} from "./core.module";
import {AuthModule} from "./auth/auth-module";

import * as fromApp from "./store/app.reducer";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent],
    imports: [
        BrowserModule,
        HttpClientModule,

        StoreModule.forRoot<ActionReducer<fromApp.AppState>>(fromApp.appReducer),
        SharedModule,
        CoreModule,
        AuthModule,
        AppRoutingModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
