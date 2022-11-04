import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

    @Input() defaultColor: string = 'transparent';
    @Input('appBetterHighlight') highLightColor: string = 'cyan';
    @HostBinding('style.backgroundColor') backgroundColor: string;
    
    constructor(/*private elementRef: ElementRef, private renderer: Renderer2*/) {
    }

    ngOnInit(): void {
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'cyan');
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'cyan');
        this.backgroundColor = this.highLightColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }


}
