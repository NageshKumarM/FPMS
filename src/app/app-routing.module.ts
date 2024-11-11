import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PofileSummaryComponent } from './components/pofile-summary/pofile-summary.component';
import { AssetCollectionComponent } from './components/asset-collection/asset-collection.component';
import { PerfomanceMetricComponent } from './components/perfomance-metric/perfomance-metric.component';
import { MakeInvestmentComponent } from './components/make-investment/make-investment.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"profile",component:PofileSummaryComponent},
  {path:"asset",component:AssetCollectionComponent},
  {path:"metric",component:PerfomanceMetricComponent},
  {path:"make-investment",component:MakeInvestmentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
