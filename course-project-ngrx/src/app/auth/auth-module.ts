import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

import {AuthComponent} from "./auth.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
    declarations: [AuthComponent],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        RouterModule.forChild([{path: 'auth', component: AuthComponent}])
    ]
})
export class AuthModule {

}