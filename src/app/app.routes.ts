import { Routes } from '@angular/router';

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
    }
];