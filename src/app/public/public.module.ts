import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { PublicRoutingModule } from './public.router';
import { PublicComponent } from './public.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
    imports: [
        CommonModule, PublicRoutingModule, FormsModule
    ],
    declarations: [
        LoginRegisterComponent,
        NotfoundComponent,
        PublicComponent,
        NavbarComponent
    ],
    providers: []
})

export class PublicModule {}
