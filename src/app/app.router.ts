import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from  './private/private.component';

export const appRoutes: Routes = [
    { path: 'public', loadChildren: 'app/public/public.module#PublicModule' },
    { path: '', loadChildren: 'app/private/private.module#PrivateModule'},
    { path: '**', redirectTo: '/not-found', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}