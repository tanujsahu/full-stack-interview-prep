# What is RxJS and how is it used in Angular?
    
    Answer: RxJS is a library for reactive programming using Observables. 
    In Angular, it is used to handle asynchronous data streams, such as HTTP requests and event handling.

        Example : 
        this.dataService.getData().subscribe(data => {
        this.items = data;
        });
