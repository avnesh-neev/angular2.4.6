import { Component, ViewEncapsulation } from '@angular/core';

const template: string = require('./header.html');

@Component({
    selector: 'header',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['components/header/header.scss'],
    template
})
export class HeaderComponent {
    constructor() {
        
    }
}
