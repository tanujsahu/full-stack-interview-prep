# How can you create a custom Observable?

Answer: Use the new Observable constructor to define how to produce values.

        Example : 
        import { Observable } from 'rxjs';

        const customObservable = new Observable(observer => {
        observer.next('Hello');
        observer.next('World');
        observer.complete();
        });

        customObservable.subscribe({
        next(value) { console.log(value); },
        complete() { console.log('Done'); }
        });
