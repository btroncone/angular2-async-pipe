import {Component} from 'angular2/core';
import {BasicService} from '../services/basic.service';
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'async-pipe-example',
    template: `
    <div>
      <h5>Add numbers...</h5>
      <input type="number" #num placeholder="Enter number..."/> 
      <button (click)="addNumber(num)">Add</button>
      <h5>
        Total: {{total$ | async}}
      </h5>
      <h5>
        Counter: {{counter$ | async}}
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
    public total$ : Observable<number>;
    public exampleObject$ : Observable<Object>;
    public examplePromise: Promise<any>;
    //public total : number;
    //private subscription : Subscription;

    constructor(
        private _basicService : BasicService
    ){
        //emit value every 1s
        this.counter$ = Observable.interval(1000);
        //accumulated total of inputs
        this.total$ = _basicService.total$;
        //emit basic object for demo purposes
        this.exampleObject$ = Observable
            .of({name: 'Joe', age: 40})
            .delay(3000);
        //promise that resolves after 3s
        this.examplePromise = _basicService.makePromise();

        // when not using AsyncPipe, remember to unsubscribe!
        // this.subscription = _basicService
        //     .total$
        //     .subscribe(val => {
        //         console.log('***SUBSCRIPTION***', val);
        //         this.total = val;
        //     });
    }

    addNumber(el){
        //next value into number subject
        this._basicService.add(parseInt(el.value));
        //clear text box
        el.value = "";
    }
    //unsubscribe in ngOnDestroy when not using AsyncPipe
    // ngOnDestroy(){
    //     this.subscription.unsubscribe();
    // }
}
