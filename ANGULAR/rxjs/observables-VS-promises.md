# What is the difference between Observables and Promises?
    Answer: Observables can emit multiple values over time, while Promises only resolve once.

        Example :
        // Observable
        const observable = new Observable(subscriber => {
        setTimeout(() => subscriber.next('Observable 1'), 1000);
        setTimeout(() => subscriber.next('Observable 2'), 2000);
        });

        observable.subscribe(value => console.log(value));

        // Promise
        const promise = new Promise((resolve) => {
        setTimeout(() => resolve('Promise resolved'), 1000);
        });

        promise.then(value => console.log(value));
