import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { StatisticComponent } from './statistic/statistic.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'statistics', component: StatisticComponent },
    { path: 'contacts', component: ContactComponent }, 
    { path: 'contacts/:id', component: ContactComponent }, 
    { path: '**', component: MainComponent }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }