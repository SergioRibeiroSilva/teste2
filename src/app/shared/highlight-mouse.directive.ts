import { Directive, HostBinding, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string; 

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white'
  }

  constructor() { }

}
