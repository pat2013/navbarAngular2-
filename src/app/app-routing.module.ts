import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { homeComponent } from './pages/app.home';
import { aboutComponent } from './pages/app.about';
import { PageNotFoundComponent } from './pages/app.pageNotFound';

const appRoutes: Routes = [
  { path: 'home', component: homeComponent },
  { path: 'about', component: aboutComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
