# What are Observables in RxJS?
    Answer: Observables represent a stream of data that can be observed over time.

        Example :
        import { Observable } from 'rxjs';

        const observable = new Observable(subscriber => {
        subscriber.next('Hello');
        subscriber.next('World');
        subscriber.complete();
        });

        observable.subscribe({
        next(value) { console.log(value); },
        complete() { console.log('Done'); }
        });
