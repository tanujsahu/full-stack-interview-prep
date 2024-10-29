# What are services in Angular?
    Answer: Services are classes that encapsulate shared logic and data. 
    They are typically used to fetch data from an API or manage application state.

        Example
        @Injectable({ providedIn: 'root' })
        export class DataService {
        getData() {
            return this.http.get('api/data');
        }
        }

