import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    isOpen: boolean = false;

    constructor(private elementRef: ElementRef) {
    }

    @HostListener('click') mouseClicked(eventData: Event) {
        this.isOpen = !this.isOpen;
        this.showOpenClosed();
    }
    
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        if(!this.elementRef.nativeElement.contains(event.target)) {
            this.isOpen = false;
        }
        this.showOpenClosed();
    }

    private showOpenClosed() {
        for (var child of this.elementRef.nativeElement.parentNode.children) {
            if (this.isOpen) {
                child.classList.add("show");
            } else {
                child.classList.remove("show");
            }
        }
    }
}