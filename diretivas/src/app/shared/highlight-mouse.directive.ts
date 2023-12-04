import { 
  Directive,
  HostListener,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter')
  onMouseOver() {
    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave')
  onMouseOut() {
    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

  //@HostBinding('style.backgroundColor') backgroundColor: any;
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }
  private backgroundColor: any;

  constructor(
      //private _elementRef: ElementRef, private _renderer: Renderer2
    ) { }

}
