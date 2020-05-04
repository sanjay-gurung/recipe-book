import { Directive, HostBinding, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    @HostBinding('className') buttonStatus: string;

    constructor (private elRef: ElementRef) { }

    ngOnInit() {
       // console.log('Element=', this.elRef)
    }

    @HostListener('click') onClicked() {
        if(this.buttonStatus === "btn-group open") {
            this.buttonStatus = "btn-group"
        } else {
            this.buttonStatus = "btn-group open"
        }
    }
}