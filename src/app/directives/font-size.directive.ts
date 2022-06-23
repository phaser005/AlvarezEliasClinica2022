import { Directive, ElementRef  } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.fontSize = '30px';
   }

}
