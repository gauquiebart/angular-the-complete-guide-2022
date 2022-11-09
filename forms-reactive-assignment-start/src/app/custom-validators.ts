import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";

export class CustomValidators {

    static invalidProjectName(control: FormControl): { [s: string]: boolean } {
        if (control.value === 'Test') {
            return {'invalidProjectName': true}
        }
        return null;
    }

    static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Testproject') {
                    return resolve({'invalidProjectName': true});
                }
                return resolve(null);

            }, 2000);
        });
    }

}