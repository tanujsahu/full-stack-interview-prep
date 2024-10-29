# What is data binding in Angular?
    Answer: Data binding is the mechanism that allows communication between the component class and its template.
    It can be one-way (from component to view or vice versa) or two-way (both ways).

        Example
        <input [(ngModel)]="name" /> 
        <p>Hello, {{ name }}</p>
