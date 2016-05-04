import {Component} from 'angular2/core';
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'async-pipe-example',
    template: `
    <div>
        <h5>
            Count: {{counter$ | async}}
            <span *ngIf="even$ | async">(EVEN!)</span>            
        </h5>
        <h5>People:</h5>
        <ul>
            <li *ngFor="let person of people$ | async">
                {{person.name}}
            </li>
        </ul>
        <h5>
            Person: {{(person$ | async)?.name}} 
                    - {{(person$ | async)?.age}}
        </h5>
        <h5>
            Data: {{data | async}}
        </h5>
    </div>
  `
})
export class AsyncPipeExample {
    counter$ : Observable<number>;
    even$: Observable<boolean>;
    people$: Observable<any>;
    person$: Observable<any>;
    data: any;

    constructor(){
        this.counter$ = Observable
            .interval(1000);

        this.even$ = this.counter$
            .map(number => number % 2 === 0);

        this.people$ = Observable.of([
                {name: 'Joe'},
                {name: 'Bob'},
                {name: 'Susy'}
            ]);

        this.person$ = Observable.of({
                name: 'Sally',
                age: 30
            })
            .delay(3000);

        this.data = this.getData();
    }

    getData(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('RECEIVED DATA!');
            }, 5000);
        })
    }
}
