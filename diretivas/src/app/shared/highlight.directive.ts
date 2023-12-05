import { Directive, HostBinding, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter')
  onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.backgroundColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') backgroundColor: any;

  @Input()
  defaultColor: string = 'transparent';
  @Input('highlight')
  highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
