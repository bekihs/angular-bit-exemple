import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsersService } from './users.service';
import { RouterModule } from '@angular/router'; 
import { MainComponent } from './main/main.component';
import { MovesListComponent } from './moves-list/moves-list.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { BitcoinService } from './bitcoin.service';
import { StatisticComponent } from './statistic/statistic.component';
import { ChartComponent } from './chart/chart.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { AppRoutingModule } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    MovesListComponent,
    MenuComponent,
    StatisticComponent,
    ChartComponent
  ],
  imports: [
    Ng2GoogleChartsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [UsersService, BitcoinService],
  bootstrap: [AppComponent]
})
export class AppModule { }
