import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizeComponent } from './quize/quize.component';
import { ProgressComponent } from './quize-progress/quize-progress.component';
import { CustomModal } from './modals/custom.component';
import { ApiService, DataStorage } from './shared';
import { routing } from './app.routing';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    QuizeComponent,
    ProgressComponent,
    CustomModal
  ],
  providers: [
    ApiService,
    DataStorage
  ],
  bootstrap: [AppComponent],
  entryComponents: [ CustomModal ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {

  }
}
