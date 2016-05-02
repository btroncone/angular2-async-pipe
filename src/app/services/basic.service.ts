import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class BasicService {
    private numbers$ : Subject<number> = new Subject<number>();
    public total$ : Observable<number>;

    constructor(){
        this.total$ = this.numbers$
            .startWith(0)
            .scan((acc, curr) => acc + curr)
    };

    add(number : number) : void {
        this.numbers$.next(number);
    }

    makePromise() : Promise<any> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve('Promise resolved!');
            }, 5000)
        })
    }
}