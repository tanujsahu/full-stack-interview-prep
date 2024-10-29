# What is the difference between BehaviorSubject and ReplaySubject?

    Answer: BehaviorSubject emits the latest value, while ReplaySubject emits specified past values.

        Example : 
        import { BehaviorSubject, ReplaySubject } from 'rxjs';

        // BehaviorSubject
        const behaviorSubject = new BehaviorSubject('Initial Value');
        behaviorSubject.subscribe(value => console.log(`BehaviorSubject: ${value}`));
        behaviorSubject.next('New Value');

        // ReplaySubject
        const replaySubject = new ReplaySubject(2); // Buffer size of 2
        replaySubject.next('Value 1');
        replaySubject.next('Value 2');
        replaySubject.next('Value 3');

        replaySubject.subscribe(value => console.log(`ReplaySubject: ${value}`)); // Outputs last 2 values
