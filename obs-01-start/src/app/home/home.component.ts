import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {filter, map} from "rxjs/operators";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    private firstObsSubscription: Subscription;

    constructor() {
    }

    ngOnInit() {
        // this.firstObsSubscription =
        //     interval(1000)
        //         .subscribe(count => {
        //             console.log(count);
        //         });
        const customIntervalObservable = new Observable(observer => {
            let count = 0;
            let intervalTimer = setInterval(() => { // setInterval just keeps running off course ! (unless you clear the interval) 
                console.log(observer);
                observer.next(count);
                if (count === 5) {
                    observer.complete();
                    clearInterval(intervalTimer);
                }
                if (count > 3) {
                    observer.error(new Error('count is greater 3!'));
                }
                count++;
            }, 1000);
        });

        this.firstObsSubscription =
            customIntervalObservable
                .pipe(
                    filter((data: number) => {
                        return data > 1;
                    }), map((data: number) => {
                        return 'Round: ' + (data + 1);
                    }))
                .subscribe(data => {
                        console.log(data);
                    }, error => {
                        console.log(error);
                    }, () => {
                        console.log('completed');
                    }
                )
        ;
    }

    ngOnDestroy()
        :
        void {
        this.firstObsSubscription.unsubscribe();
    }

}
