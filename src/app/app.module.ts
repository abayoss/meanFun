import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { PageNotFoundComponent } from './Layout/page-not-found/page-not-found.component';
import { LandingComponent } from './Layout/landing/Landing.component';
import { MotorModule } from './Components/public/motorcycleDealership/motor.module';
import { MilitaryModule } from './Components/private/militaryBases/military.module';
import { AuthModule } from './Components/private/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LandingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MotorModule, MilitaryModule, AuthModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
