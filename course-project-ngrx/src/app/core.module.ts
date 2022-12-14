import {RecipeService} from "./recipes/recipe.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptorService} from "./auth/auth-interceptor.service";
import {NgModule} from "@angular/core";

@NgModule({
    providers: [
        RecipeService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        }
    ]
})
export class CoreModule {

}