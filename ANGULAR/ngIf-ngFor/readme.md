# What is the difference between ngIf and ngFor?

Answer: ngIf is a structural directive that conditionally includes or excludes a template based on a boolean expression, while ngFor is used to iterate over a collection and create a template for each item.

         Example
         <div *ngIf="isVisible">Content is visible</div>
         <ul>
         <li *ngFor="let item of items">{{ item }}</li>
         </ul>



