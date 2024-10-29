# What is the purpose of the subscribe method?
    
    Answer: The subscribe method executes the Observable and handles emitted values.    

        Example :
        const observable = new Observable(subscriber => {
        subscriber.next('Hello');
        });

        observable.subscribe(value => console.log(value)); // Outputs: Hello
