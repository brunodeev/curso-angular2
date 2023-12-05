import { 
  Directive,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter')
  onMouseOver() {
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.backgroundColor = 'transparent';
  }

  @HostBinding('style.backgroundColor') backgroundColor: any;

  constructor() { }

}
