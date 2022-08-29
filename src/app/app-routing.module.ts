import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataAnalysisComponent } from './data-analysis/data-analysis.component';
import { MainContentComponent } from './main-content/main-content.component';
import { OnlineServiceComponent } from './online-service/online-service.component';

const routes: Routes = [
  // { path: '', redirectTo: 'mainContent', pathMatch: 'full' },
  { path: '', component: MainContentComponent },
  { path: 'onlineService', component: OnlineServiceComponent },
  { path: 'DataAnalysis', component: DataAnalysisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
