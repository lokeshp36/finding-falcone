import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ResultComponent } from './components/result/result.component';
import { SelectionComponent } from './components/selection/selection.component';

const routes: Routes = [
  { path: '', redirectTo: 'selection', pathMatch: 'full' },
  { path: 'selection', component: SelectionComponent },
  { path: 'result', component: ResultComponent },
  { path: '**', component: SelectionComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
