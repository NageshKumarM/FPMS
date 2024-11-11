import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PofileSummaryComponent } from './components/pofile-summary/pofile-summary.component';
import { AssetCollectionComponent } from './components/asset-collection/asset-collection.component';
import { MakeInvestmentComponent } from './components/make-investment/make-investment.component';
import { PerfomanceMetricComponent } from './components/perfomance-metric/perfomance-metric.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PofileSummaryComponent,
    AssetCollectionComponent,
    MakeInvestmentComponent,
    PerfomanceMetricComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
