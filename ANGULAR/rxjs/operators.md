#  What are operators in RxJS?
    
    Answer: Operators allow manipulation of data streams.
    Operators in RxJS are functions that enable you to manipulate the data streams emitted by Observables.
    They can transform, filter, combine, or perform side effects on the data.
    Operators are typically used with the .pipe() method.

## Here are several common operators with examples:

1. map
    Transforms the items emitted by an Observable by applying a function to each item.

        Example:
        import { map } from 'rxjs/operators';

        const numbers = [1,2,3];
        const doubled = numbers.pipe(map(x => x * 2));

        doubled.subscribe(value => console.log(value)); // Outputs: 2, 4, 6

2. filter
    Emits only those items from the Observable that pass a specified predicate function.

        Example:

        import { from } from 'rxjs';
        import { filter } from 'rxjs/operators';

        const numbers = from([1, 2, 3, 4, 5]);
        const evenNumbers = numbers.pipe(filter(x => x % 2 === 0));

        evenNumbers.subscribe(value => console.log(value)); // Outputs: 2, 4


3. reduce
    Applies an accumulator function over the source Observable, returning a single value.

        Example:

        import { from } from 'rxjs';
        import { reduce } from 'rxjs/operators';

        const numbers = from([1, 2, 3, 4]);
        const sum = numbers.pipe(reduce((acc, curr) => acc + curr, 0));

        sum.subscribe(value => console.log(value)); // Outputs: 10


4. mergeMap
    Takes each value from an Observable and transforms it into a new Observable. Then, it combines the results from all these new Observables into a single stream of values.

        Example:

        import { of } from 'rxjs';
        import { mergeMap } from 'rxjs/operators';

        const source = of(1, 2, 3);
        const result = source.pipe(mergeMap(x => of(x * 10)));

        result.subscribe(value => console.log(value)); // Outputs: 10, 20, 30


5. switchMap
    Projects each source value to an Observable, but only emits values from the most recently projected Observable.
    It takes each value from an Observable and transforms it into a new Observable.
    However, it only keeps track of the most recent  Observable and discards any previous ones.
    This is especially useful when you want to respond to user actions, like typing in a  search box.

        Example:

        import { of, timer } from 'rxjs';
        import { switchMap } from 'rxjs/operators';

        const source = of('A', 'B', 'C');
        const result = source.pipe(switchMap(val => timer(1000).pipe(map(() => `${val} after 1s`))));

        result.subscribe(value => console.log(value)); // Outputs: "A after 1s", then "B after 1s" (C won't be emitted)

6. concatMap
Maps each value to an Observable, then flattens all of the inner Observables using concatenation.

        Example:

        import { of } from 'rxjs';
        import { concatMap, delay } from 'rxjs/operators';

        const source = of('A', 'B', 'C');
        const result = source.pipe(concatMap(val => of(`${val} delayed`).pipe(delay(1000))));

        result.subscribe(value => console.log(value)); // Outputs: "A delayed", then "B delayed", then "C delayed";


7. tap
    Allows you to perform side effects for notifications from the source Observable.

        Example:

        import { from } from 'rxjs';
        import { tap } from 'rxjs/operators';

        const numbers = from([1, 2, 3]);
        const result = numbers.pipe(tap(x => console.log(`Before: ${x}`)));

        result.subscribe(value => console.log(`After: ${value}`));
        // Outputs: Before: 1, After: 1, Before: 2, After: 2, Before: 3, After: 3


8. combineLatest
    Combines the latest values from multiple Observables.

    Example:

    import { combineLatest, of } from 'rxjs';

    const obs1 = of('Hello');
    const obs2 = of('World');

    combineLatest([obs1, obs2]).subscribe(([val1, val2]) => {
    console.log(`${val1} ${val2}`); // Outputs: "Hello World"
    });


9. forkJoin
    Waits for all Observables to complete and emits the last emitted value from each.

        Example:

        import { forkJoin, of } from 'rxjs';
        import { delay } from 'rxjs/operators';

        const obs1 = of('Value 1').pipe(delay(1000));
        const obs2 = of('Value 2').pipe(delay(2000));

        forkJoin([obs1, obs2]).subscribe(values => {
        console.log(values); // Outputs: ['Value 1', 'Value 2']
        });


10. debounceTime
    debounceTime is an operator in RxJS that helps manage how often events are processed.
    It only lets through events that happen after a certain pause or delay.

        Example:

        import { fromEvent } from 'rxjs';
        import { debounceTime } from 'rxjs/operators';

        const input = document.getElementById('myInput');
        const input$ = fromEvent(input, 'input');

        input$.pipe(debounceTime(300)).subscribe(event => {
        console.log(event.target.value); // Logs input value after 300ms pause
        });


