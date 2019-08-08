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
import { AuthGuard } from './Components/private/auth/auth.guard';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'motor', component: ListMotorComponent },
  { path: 'motor/add', component: AddMotorComponent },
  { path: 'motor/show/:id', component: ShowMotorComponent },
  { path: 'motor/edit/:id', component: EditMotorComponent },
  { path: 'base', component: ListBaseComponent, canActivate: [AuthGuard] },
  { path: 'base/add', component: AddBaseComponent, canActivate: [AuthGuard] },
  {
    path: 'base/show/:id',
    component: ShowBaseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'base/edit/:id',
    component: EditBaseComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Components/private/auth/auth.module').then(
        mod => mod.AuthModule
      )
  },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
