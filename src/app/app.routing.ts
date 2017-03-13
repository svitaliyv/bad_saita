import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { QuizeComponent } from './quize/quize.component';
import { ModalsComponent } from './modals/modals.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'quize', component: QuizeComponent},
  { path: 'modals', component: ModalsComponent},
  { path: 'results', component: ResultsComponent}
];

export const routing = RouterModule.forRoot(routes);
