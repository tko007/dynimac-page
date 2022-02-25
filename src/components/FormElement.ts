import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[form-element]',
})
// tslint:disable-next-line:directive-class-suffix
export class FormElement {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
