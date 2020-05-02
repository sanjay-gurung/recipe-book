import { Component, Output,EventEmitter } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
    
})
export class HeaderComponent {
    @Output() selection = new EventEmitter<string>();

    onClick(userAction: string) {
        if(userAction === 'Recipes clicked') {
            this.selection.emit('Recipes');
        } else {
            this.selection.emit('Shopping List');
        }

    }

}