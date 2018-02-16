import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PublicModule,
    PrivateModule
  ],
  providers: [UsersService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
