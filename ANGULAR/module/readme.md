# What is a module in Angular?

    Answer: A module is a container for a cohesive block of code dedicated to an application domain, workflow, or a closely related set of capabilities. The root module is typically called AppModule.

        Example
        @NgModule({
        declarations: [ExampleComponent],
        imports: [BrowserModule],
        bootstrap: [AppComponent],
        })
        export class AppModule {}

