import {Component, ComponentFactoryResolver, OnDestroy, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {AlertComponent} from "../shared/alert/alert.component";
import {PlaceholderDirective} from "../shared/placeholder/placeholder.directive";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {

    isLoginMode = true;
    isLoading = false;
    error?: null;
    @ViewChild(PlaceholderDirective, {static: false}) alertHost!: PlaceholderDirective;
    private closeSub!: Subscription; 

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
                this.showErrorAlert(errorResponse);
                this.isLoading = false;
            });
        authForm.reset();
    }

    onHandleError() {
        this.error = null;
    }
    
    private showErrorAlert(message: string) {
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();
        
        var alertComponentRef = hostViewContainerRef.createComponent(AlertComponent);
        
        alertComponentRef.instance.message = message;
        this.closeSub = alertComponentRef.instance.close
            .subscribe(() => {
                this.closeSub.unsubscribe();
                hostViewContainerRef.clear();
            });
    }
    
    ngOnDestroy() {
        if(this.closeSub) {
            this.closeSub.unsubscribe();
        }
    }
}