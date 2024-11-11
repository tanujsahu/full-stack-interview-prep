# What is Angular?
        Answer: Angular is a platform and framework for building single-page client applications using HTML and TypeScript.
        It is maintained by Google and offers features like two-way data binding, dependency injection, and modular architecture.
        
        Example: A simple Angular app that fetches data from an API and displays it in a list.


# 1. What is Angular?
        Angular is a TypeScript-based framework for building client-side applications, offering features like two-way data binding, dependency injection, components, directives, and routing to build dynamic SPAs.

# 2. What are Components in Angular?
        A component consists of a class (logic), template (view), and styles. It is the basic building block of the UI. Components use @Component decorator to define their metadata.

        Example:
        @Component({
        selector: 'app-root',
        template: `<h1>{{ title }}</h1>`
        })
        export class AppComponent {
        title = 'Angular';
        }

# 3. What is Two-Way Data Binding in Angular?
        Two-way data binding synchronizes the model and view. Changes in the model reflect in the view, and vice versa, using [(ngModel)].

        Example:
        <input [(ngModel)]="username">
        <p>{{ username }}</p>

# 4. What is Dependency Injection (DI) in Angular?
        DI is a design pattern where Angular injects services or dependencies into components rather than the component creating them.

        Example:

        @Injectable({ providedIn: 'root' })
        export class DataService {
        getData() { return 'data'; }
        }

        @Component({ selector: 'app-root', template: '<p>{{ data }}</p>' })
        export class AppComponent {
        data = this.dataService.getData();
        constructor(private dataService: DataService) {}
        }

# 5. What are Directives in Angular?
        Directives modify the behavior of DOM elements. Types:

        Structural (*ngIf, *ngFor)
        Attribute (ngClass, ngStyle)

        Example:

        <div *ngIf="isVisible">Visible Content</div>

# 6. What is Angular Routing?
        Routing in Angular allows navigation between different views. It uses paths mapped to components.

        Example:

        const routes: Routes = [
        { path: '', component: HomeComponent },
        { path: 'about', component: AboutComponent }
        ];

# 7. What is RxJS in Angular?
        RxJS is used for handling asynchronous operations. Observables allow us to work with streams of data reactively.

        Example:

        this.http.get('url').subscribe(data => console.log(data));

# 8. What are Angular Lifecycle Hooks?
        Lifecycle hooks allow you to run code at specific times in a component’s life, e.g., ngOnInit, ngOnChanges, ngOnDestroy.

        Example:

        ngOnInit() { console.log('Component Initialized'); }
        ngOnDestroy() { console.log('Component Destroyed'); }

# 9. What is a Service in Angular?
        A service is a class used to handle business logic, data, and HTTP operations, and is injected into components.

        Example:

        @Injectable({ providedIn: 'root' })
        export class ProductService {
        getProducts() { return [{ id: 1, name: 'Product 1' }]; }
        }

# 10. What is Angular CLI?
        Angular CLI is a command-line tool to generate components, services, manage builds, and run the app.

        Example:

        ng new my-app
        ng generate component my-component
        ng serve

# 11. What is the difference between ngOnInit and constructor?

        Constructor: Called when the class is instantiated. It’s used for simple initialization like setting up properties but should avoid heavy logic or side effects.
        ngOnInit: Called after Angular initializes input properties and is ideal for initialization logic that involves components' lifecycle or dependencies.

        Example:

        export class AppComponent implements OnInit {
        constructor() {
        console.log('Constructor called');
        }
  
        ngOnInit() {
        console.log('ngOnInit called');
        }
        }

# 12. What is the difference between ngOnChanges and ngDoCheck?
Answer:

        ngOnChanges: Triggered when input properties (@Input()) change. It receives a SimpleChanges object containing the previous and current values.
        ngDoCheck: Called during every change detection cycle and allows you to implement custom change detection logic.     

# 13. What is a Module in Angular?
        Answer: A module is a container for related components, services, directives, and pipes. Every Angular app has at least one module, the root module (AppModule), which bootstraps the app.

        Example:

        @NgModule({
        declarations: [AppComponent],
        imports: [BrowserModule],
        providers: [],
        bootstrap: [AppComponent]
        })
        export class AppModule { }

# 14. What is Lazy Loading in Angular?
        Answer: Lazy loading is a technique to load feature modules only when they are required, which improves the app's initial load time by splitting the bundle into smaller chunks.

        Example: In app-routing.module.ts:

        const routes: Routes = [
        { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }
        ];

# 15. What are Observables in Angular?
        Answer: An Observable is a stream of asynchronous data, and RxJS provides operators to handle async operations, manage data streams, and work with events, promises, and HTTP requests.

        Example:

        import { Observable } from 'rxjs';

        this.http.get('api/data').subscribe(data => console.log(data));

# 16. What is the difference between BehaviorSubject and Subject?
        Answer:

        Subject: Emits data to subscribers, but doesn’t retain any previous state.
        BehaviorSubject: Retains the latest value and emits it to new subscribers immediately upon subscription.
        Example:

        const subject = new BehaviorSubject('Initial Value');
        subject.subscribe(value => console.log(value));  // Immediately logs "Initial Value"
        subject.next('New Value');

# 17. What is an Angular Pipe?
        Answer: A pipe transforms data in templates, such as formatting dates, currency, or filtering lists. Angular provides several built-in pipes like DatePipe, CurrencyPipe, etc., and you can also create custom pipes.

        Example:

        <p>{{ today | date:'shortDate' }}</p>

# 18. How do you optimize an Angular application for performance?
Answer: To optimize performance:

        Lazy load modules to reduce the initial bundle size.
        Use OnPush change detection to reduce unnecessary change detection cycles.
        TrackBy in ngFor to avoid unnecessary DOM manipulations.
        Optimize bundle size using the Angular CLI ng build --prod.
        Use AOT (Ahead of Time) compilation to reduce the size of your app and speed up the loading.

# 19. What is Ahead-of-Time (AOT) Compilation in Angular?
        Answer: AOT compiles the Angular templates and components at build time, rather than at runtime. It results in faster rendering, smaller bundle sizes, and fewer runtime errors.

        Example: To enable AOT:

        ng build --prod

# 20. What is the purpose of ng-content?
        Answer: ng-content is used for content projection in Angular, allowing you to insert dynamic content into a component’s template.

        Example:

        <!-- Parent component -->
        <app-card>
        <p>Dynamic content goes here!</p>
        </app-card>

        <!-- Child component (card.component.html) -->
        <div class="card">
        <ng-content></ng-content>
        </div>

# 21. What is Change Detection in Angular?
        Answer: Change detection is the mechanism Angular uses to update the DOM when data in the component changes. Angular uses a zone to monitor changes and triggers change detection automatically. You can optimize it by using ChangeDetectionStrategy.OnPush.

# 22. What is the purpose of @Input and @Output decorators?
        Answer:

        @Input: Used to bind data from a parent component to a child component.
        @Output: Used to emit events from a child component to a parent component.
     
        Example:

        // Parent Component
        <app-child [data]="parentData" (notify)="onNotify($event)"></app-child>

        // Child Component
        @Input() data: string;
        @Output() notify = new EventEmitter<string>();

# 23. What is the purpose of ngIf and ngFor directives?
        Answer:

        ngIf: Conditionally adds or removes elements from the DOM based on a condition.
        ngFor: Iterates over an array or object to display a list of items.
        Example:

        <div *ngIf="isVisible">Visible Content</div>
        <ul>
        <li *ngFor="let item of items">{{ item }}</li>
        </ul>

# 24. What is Angular Universal?
        Answer: Angular Universal is a technology for server-side rendering (SSR) of Angular applications, which improves SEO and initial page load time by rendering HTML on the server.

# 25. What is the role of RouterLink in Angular?
        Answer: RouterLink is used to navigate to different routes in the Angular app. It’s the declarative way to create navigation links.

        Example:

        <a routerLink="/home">Go to Home</a>

# 26. What is a resolver in Angular Routing?
        Answer: A resolver in Angular is a service used to fetch data before a route is activated. It allows you to delay navigation until the necessary data is retrieved.

        Example:

        {
        path: 'product/:id',
        component: ProductComponent,
        resolve: { product: ProductResolver }
        }

# 27. How do you handle HTTP errors in Angular?
        Answer: You can handle HTTP errors using RxJS operators like catchError or retry.

        Example:

        this.http.get('/api/data')
        .pipe(catchError(error => {
        console.error(error);
        return throwError('Error occurred');
        }))
        .subscribe();

# 28. What is the difference between ViewChild and ContentChild?
Answer:

        ViewChild: Used to access child components, directives, or DOM elements defined in the component's own template.

        ContentChild: Used to access content projected into the component via ng-content.

# 29. What are Angular Forms?
        Answer: Angular provides two types of forms:

        Template-driven forms: Simplified approach, used with ngModel.
        Reactive forms: More control, built with FormGroup, FormControl, and FormArray.

# 30. What are the benefits of Angular over other frameworks?
        Answer:

        TypeScript: Strong typing and modern JS features.
        Component-based architecture: Reusable and testable components.
        Dependency Injection: Clear separation of concerns and easier testing.
        RxJS: Powerful asynchronous handling.
        Tools and CLI: Efficient development and automation tools.
