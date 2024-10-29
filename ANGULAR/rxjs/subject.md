#  What is a Subject in RxJS?
    
    Answer: A Subject is both an Observable and an Observer, allowing values to be multicasted to multiple subscribers.

        Example :
        import { Subject } from 'rxjs';

        const subject = new Subject();

        subject.subscribe(value => console.log(`Subscriber 1: ${value}`));
        subject.subscribe(value => console.log(`Subscriber 2: ${value}`));

        subject.next('First Value'); // Both subscribers receive this

