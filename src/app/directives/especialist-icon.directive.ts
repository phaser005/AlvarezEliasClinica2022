import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEspecialistIcon]'
})
export class EspecialistIconDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.width = "50px";
    elementRef.nativeElement.style.height = "50px";
    elementRef.nativeElement.style.borderRadius = "10%";
   }

}
