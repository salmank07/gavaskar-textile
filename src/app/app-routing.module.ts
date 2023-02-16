import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DataAnalysisComponent } from './data-analysis/data-analysis.component';
import { EduSeedorComponent } from './edu-seedor/edu-seedor.component';
import { MainContentComponent } from './main-content/main-content.component';
import { OnlineServiceComponent } from './online-service/online-service.component';

const routes: Routes = [
  // { path: '', redirectTo: 'mainContent', pathMatch: 'full' },
  { path: '', component: MainContentComponent },
  { path: 'onlineService', component: OnlineServiceComponent },
  { path: 'DataAnalysis', component: DataAnalysisComponent },
  { path: 'about', component: AboutComponent },
  { path: 'seedor/:id', component: EduSeedorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
