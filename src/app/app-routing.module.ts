import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './Layout/page-not-found/page-not-found.component';
import { LandingComponent } from './Layout/landing/Landing.component';
// motor routes :
import { ListMotorComponent } from './Components/public/motorcycleDealership/list-motor/list-motor.component';
import { AddMotorComponent } from './Components/public/motorcycleDealership/add-motor/add-motor.component';
import { EditMotorComponent } from './Components/public/motorcycleDealership/edit-motor/edit-motor.component';
import { ShowMotorComponent } from './Components/public/motorcycleDealership/show-motor/show-motor.component';
import { ListBaseComponent } from './Components/private/militaryBases/list-base/list-base.component';
import { AddBaseComponent } from './Components/private/militaryBases/add-base/add-base.component';
import { ShowBaseComponent } from './Components/private/militaryBases/show-base/show-base.component';
import { EditBaseComponent } from './Components/private/militaryBases/edit-base/edit-base.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'motor', component: ListMotorComponent },
  { path: 'motor/add', component: AddMotorComponent },
  { path: 'motor/show/:id', component: ShowMotorComponent },
  { path: 'motor/edit/:id', component: EditMotorComponent },
  { path: 'base', component: ListBaseComponent },
  { path: 'base/add', component: AddBaseComponent },
  { path: 'base/show/:id', component: ShowBaseComponent },
  { path: 'base/edit/:id', component: EditBaseComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
