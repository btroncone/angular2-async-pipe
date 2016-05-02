import {Component} from 'angular2/core';
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'async-pipe-example',
    template: `
    <div>
      <h5>
        Counter:  {{counter$ | async}} 
        <span *ngIf="even$ | async">(Even Number!)</span>
      </h5>
      <h5>
        Object example: {{(exampleObject$ | async)?.name}}
      </h5>
      <h5>
        Test Promise: {{examplePromise | async}}
      </h5>
    </div>
  `
})
export class AsyncPipeExample {
    public counter$ : Observable<number>;
    public even$ : Observable<boolean>;
    public exampleObject$ : Observable<Object>;
    public examplePromise: Promise<any>;
    //private subscription : Subscription;

    constructor(){
        //emit value every 1s
        this.counter$ = Observable.interval(1000);
        //is current count even?
        this.even$ = this.counter$.map(val => val % 2 === 0);
        //emit basic object for demo purposes
        this.exampleObject$ = Observable
            .of({name: 'Joe', age: 40})
            .delay(3000);
        //promise that resolves after 3s
        this.examplePromise = this.getData();
    }

    getData(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('***DATA RECEIVED!***');
            }, 5000);
        })
    }
    //unsubscribe in ngOnDestroy when not using AsyncPipe
    // ngOnDestroy(){
    //     this.subscription.unsubscribe();
    // }
}
