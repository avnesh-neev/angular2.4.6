import { Component } from '@angular/core';

@Component({
    selector: 'app',
    providers: [],
    template: `
<main>
<header></header> 
<div id="wrapper">
<div id="page-content-wrapper">
<router-outlet></router-outlet>
</div>
</div>
<footer></footer>
</main>
`
})
export class AppComponent {

    
}
