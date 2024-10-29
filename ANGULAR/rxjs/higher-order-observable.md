#  What are higher-order Observables?

    Answer: Observables that emit other Observables. Use operators like mergeMap and switchMap.

        Example :
        import { of } from 'rxjs';
        import { mergeMap } from 'rxjs/operators';

        const outerObservable = of(1, 2, 3);
        const innerObservable = (value) => of(value * 10);

        outerObservable.pipe(
        mergeMap(value => innerObservable(value))
        ).subscribe(result => console.log(result)); // Outputs: 10, 20, 30
