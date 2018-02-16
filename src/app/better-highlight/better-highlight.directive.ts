import { Directive ,OnInit,Renderer2,ElementRef,HostListener,HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor : string;
  @Input() highlightColor : string;
  constructor(private elref:ElementRef , private renderer : Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.elref.nativeElement,'background-color','transparent');
    this.defaultColor='transparent';
  }
@HostBinding('style.backgroundColor') bgcolor:string = 'transparent';
@HostListener('mouseenter') mouseover(eventata:Event){
  // this.renderer.setStyle(this.elref.nativeElement,'background-color','blue');
  this.bgcolor = this.highlightColor;
};
@HostListener('mouseleave') mouseleave(eventata:Event){
  // this.renderer.setStyle(this.elref.nativeElement,'background-color','transparent');
  this.bgcolor = this.defaultColor;
};

}
