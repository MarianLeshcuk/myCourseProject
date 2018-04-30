import { Directive, ElementRef, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMain]'
})
export class MainDirective {

  heightOn = "70vh";
  heightOut = "300px";

  @HostBinding('style.height') height: string;

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, "background", "green");
    // this.renderer.setStyle(this.elementRef.nativeElement, "color", "white");
 }

 constructor( private elementRef: ElementRef, private renderer: Renderer2 ) { }

//  @HostListener('click') newColor() {
//   this.height = this.heightOn;
//  }

//  @HostListener('mouseleave') newColor2() {
//   this.height = this.heightOut;
//  }

}
