import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { StatisticComponent } from './statistic/statistic.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'statistics', component: StatisticComponent },
    { path: 'contacts', component: ContactComponent }, 
    { path: 'contacts/:id', component: ContactDetailsComponent }, 
    { path: '**', component: MainComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }