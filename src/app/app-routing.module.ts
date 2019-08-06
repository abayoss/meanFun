import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './Layout/page-not-found/page-not-found.component';
import { LandingComponent } from './Layout/landing/Landing.component';
// motor routes :
import { ListMotorComponent } from './Components/public/motorcycleDealership/list-motor/list-motor.component';
import { AddMotorComponent } from './Components/public/motorcycleDealership/add-motor/add-motor.component';
import { EditMotorComponent } from './Components/public/motorcycleDealership/edit-motor/edit-motor.component';

const routes: Routes = [
  {path: '', component: LandingComponent },
  {path: '**', component: PageNotFoundComponent }
];
const motorRoutes: Routes = [
  {path: 'motor', component: ListMotorComponent },
  {path: 'motor/add', component: AddMotorComponent },
  {path: 'motor/show/:id', component: EditMotorComponent },
  {path: 'motor/edit', component: ListMotorComponent }
];
routes.unshift(motorRoutes[0]);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
