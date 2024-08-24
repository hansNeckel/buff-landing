import { Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';

//export const routes: Routes = [];


export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/components/layout/layout.component'),
        children: [
            /* 
            {
                path: 'something',
                loadComponent: () => import('relativeroute')
            },
            */
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }

        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    },
    { path: 'login', component: LoginComponent }
];