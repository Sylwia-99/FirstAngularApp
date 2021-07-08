import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements  OnInit{

  constructor(private element: ElementRef, private renderer: Renderer2 ) { }

  ngOnInit(): void {
    let li = this.element.nativeElement;
    this.renderer.setStyle(li, 'list-style', 'url(/assets/tick.png)');
  }
}
