import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { NotfoundComponent } from './notfound/notfound.component';


const publicRoutes: Routes = [ 
    { path: '', component: PublicComponent,
        children: [{ path: 'login-register', component: LoginRegisterComponent }]
    },
    { path: 'not-found', component: NotfoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(publicRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class PublicRoutingModule {}