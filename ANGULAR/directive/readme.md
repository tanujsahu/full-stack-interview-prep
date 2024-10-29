# What is a directive in Angular?

   Answer: Directives are classes that add behavior to elements in Angular applications. 
   There are three types: components, structural directives (like *ngIf), and attribute directives.

         Example
         @Directive({
         selector: '[appHighlight]'
         })
         export class HighlightDirective {
         constructor(el: ElementRef) {
            el.nativeElement.style.backgroundColor = 'yellow';
         }
         }


