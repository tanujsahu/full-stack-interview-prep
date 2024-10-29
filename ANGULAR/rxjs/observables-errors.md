#  How can you handle errors in an Observable?
    Answer: Use catchError operator or error handler in subscribe.

        Example :
        import { of, throwError } from 'rxjs';
        import { catchError } from 'rxjs/operators';

        const observableWithError = throwError('Error occurred!');

        observableWithError.pipe(
        catchError(error => {
            console.error(error);
            return of('Error handled'); // Return a fallback value
        })
        ).subscribe(value => console.log(value));
