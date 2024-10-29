# What is the forkJoin operator?

    Answer: Combines multiple Observables and emits a single array of results when all have completed.

        Example :
        import { forkJoin, of } from 'rxjs';

        const observable1 = of('Value 1');
        const observable2 = of('Value 2');

        forkJoin([observable1, observable2]).subscribe(values => {
        console.log(values); // Outputs: ['Value 1', 'Value 2']
        });





    
    