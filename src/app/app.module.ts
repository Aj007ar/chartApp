import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ChartModule} from 'primeng/chart';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartDataComponent } from './Components/chart-data/chart-data.component';
import { DisplayChartComponent } from './Components/display-chart/display-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartDataComponent,
    DisplayChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    HttpClientModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
