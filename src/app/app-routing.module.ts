import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './Layout/page-not-found/page-not-found.component';
import { LandingComponent } from './Layout/landing/Landing.component';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
