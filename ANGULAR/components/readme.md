# What are components in Angular?

    Answer: Components are the basic building blocks of an Angular application.
    Each component consists of an HTML template, a TypeScript class, and styles

        Example
        @Component({
        selector: 'app-example',
        template: `<h1>{{ title }}</h1>`,
        })
        export class ExampleComponent {
        title = 'Hello Angular';
        }
