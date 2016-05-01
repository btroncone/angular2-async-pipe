import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/Rx';

@Injectable()
export class TotalService {
    private numbers$ = new Subject();
    public total$ : Observable<string>;

    constructor(){
        this.total$ = this.numbers$
            .startWith(0)
            .scan((acc, curr) => acc + curr)
    };

    add(number){
        this.numbers$.next(number);
    }

    makePromise(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Promise resolved!');
            }, 5000)
        })
    }
}