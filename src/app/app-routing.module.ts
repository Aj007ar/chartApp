import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartDataComponent } from './Components/chart-data/chart-data.component';
import { DisplayChartComponent } from './Components/display-chart/display-chart.component';

const routes: Routes = [
  {path:'data',component:ChartDataComponent},
  {path:'chart',component:DisplayChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
