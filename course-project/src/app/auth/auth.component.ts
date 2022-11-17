import {Component} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {

    isLoginMode = true;
    isLoading = false;
    error?: string = undefined;

    constructor(private authService: AuthService,
                private router: Router) {
    }

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(authForm: NgForm) {
        if (!authForm.valid) {
            return;
        }

        const email = authForm.value.email;
        const password = authForm.value.password;

        this.isLoading = true;

        (this.isLoginMode ?
            this.authService.login(email, password)
            : this.authService.signup(email, password))
            .subscribe(resData => {
                console.log(resData);
                this.isLoading = false;
                this.router.navigate(['/recipes'])
            }, errorResponse => {
                console.log(errorResponse);
                this.error = errorResponse;
                this.isLoading = false;
            });
        authForm.reset();
    }
}