import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Home } from '../home/home';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', component: Home }
   
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

