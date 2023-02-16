import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnlineServiceComponent } from './online-service/online-service.component';
import { MainContentComponent } from './main-content/main-content.component';
import { DataAnalysisComponent } from './data-analysis/data-analysis.component';
import { AboutComponent } from './about/about.component';
import { EduSeedorComponent } from './edu-seedor/edu-seedor.component';

@NgModule({
  declarations: [
    AppComponent,
    OnlineServiceComponent,
    MainContentComponent,
    DataAnalysisComponent,
    AboutComponent,
    EduSeedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
