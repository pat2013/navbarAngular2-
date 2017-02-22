import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { navComponent }  from './nav/app.nav-component';
import { jumbotronComponent } from './jumbotron/app.jumbotron';
import { homeComponent } from './pages/app.home';
import { aboutComponent } from './pages/app.about';
import { PageNotFoundComponent } from './pages/app.pageNotFound';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule 
                ],
  declarations: [ AppComponent,
                  navComponent,
                  homeComponent,
                  jumbotronComponent,
                  aboutComponent,
                  PageNotFoundComponent
                 ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
