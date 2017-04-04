import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizeComponent } from './quize/quize.component';
import { ProgressComponent } from './quize-progress/quize-progress.component';

import { QuizeInfoComponent } from './quize/quize-info/quize-info.component';
import { LastResultComponent } from './quize/last-result/last-result.component';
import { QuestionComponent } from './quize/question/question.component';

import { ModalsComponent } from './modals/modals.component';
import { CustomModal } from './modals/custom/custom.component';
import { ResultsComponent } from './results/results.component';
import { ElfComponent } from './elf/elf.component';

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
    CustomModal,
    ModalsComponent,
    ResultsComponent,
    QuizeInfoComponent,
    QuestionComponent,
    LastResultComponent,
    ElfComponent
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
