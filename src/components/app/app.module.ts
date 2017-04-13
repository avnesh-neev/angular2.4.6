import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Home } from '../home/home';

import { AccordionModule, ProgressbarModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { routing, appRoutingProviders } from '../app/app.routing';
import { ModalModule } from '../my-modal/modal.module';

import { HeaderComponent } from '../header/header.component';


import '../../styles/blue.scss';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        AccordionModule,
        DropdownModule,
        ProgressbarModule,
        routing,
        ModalModule
    ],
    declarations: [
        AppComponent,
        Home,
        HeaderComponent,
        
    ],
    bootstrap: [ AppComponent ],
    providers: [
        appRoutingProviders,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ]
})
export class AppModule {
}

