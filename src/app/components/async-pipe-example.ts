import {Component} from 'angular2/core';
import {TestService} from '../services/total.service';

@Component({
    selector: 'async-pipe-example',
    template: `
    <div>
      <h2>Async Pipe</h2>
      <input type="number" #num /> 
      <button (click)="addNumber(num.value)">Add</button>
      <h5>Total: {{total | async}} </h5>
      <h5>Test Promise: {{testPromise | async}} </h5>
    </div>
  `
})
export class AsyncPipeExample {
    test;
    constructor(
        private _service : TestService
    ){
        this.total = _service.total$;
        this.testPromise = _service.makePromise();
        this.test = _service.total$.do(val => {
            console.log('ONE SUB!', val)
        }).subscribe()
    }
    addNumber(number){
        this._service.add(parseInt(number));
    }

    ngOnDestroy(){
        this.test.unsubscribe()
    }
}
}