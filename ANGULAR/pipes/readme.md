# Pipes in Angular:
    Pipes are a feature in Angular that allow you to transform data for display in templates. They are like filters that format or change how data looks.

# Types Of 
## Built-in Pipes: 
    Predefined pipes that come with Angular (e.g., DatePipe, CurrencyPipe).
## Custom Pipes: 
    User-defined pipes for specific use cases.

## Key Points
    Transform Data: Pipes change the format of data, such as dates, numbers, or strings.

## Built-in Pipes: Angular provides many built-in pipes, like:

    DatePipe: Formats dates.
    CurrencyPipe: Displays currency values.
    DecimalPipe: Formats numbers with decimals.
    SlicePipe: Cuts an array or string.
    Chaining Pipes: You can use multiple pipes together.
        
        Example: {{ birthday | date:'shortDate' }} formats a date. 
        Example: {{ value | currency | uppercase }} formats a value as currency and then converts it to uppercase.
        
## Custom Pipes: You can create your own pipes for specific data transformations.

    Example of a Custom Pipe
    Create the Pipe:

        @Pipe({ name: 'exclaim' })
        export class ExclaimPipe implements PipeTransform {
        transform(value: string): string {
            return value + '!';
        }
        }
        Use the Pipe:

        <p>{{ 'Hello' | exclaim }}</p> <!-- Outputs: "Hello!" -->

## Summary
    Pipes in Angular help you easily format and display data in a clean way.
    They make your templates more readable and manageable.
    If you need more details or examples, just let me know!