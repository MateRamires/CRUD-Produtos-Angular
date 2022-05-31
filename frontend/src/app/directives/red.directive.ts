import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]' //Nome da diretiva.
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b'
  }

}
