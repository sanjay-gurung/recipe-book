import { Directive, HostBinding, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
    //@HostBinding('style.') style: string;

    //constructor(private elRef = ElementRef) { }

    ngOnInit() {
       // console.log('Element=', this.elRef)
    }

    // onClicked() {
        
    // }
}