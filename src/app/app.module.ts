import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { PageNotFoundComponent } from './Layout/page-not-found/page-not-found.component';
import { LandingComponent } from './Layout/landing/Landing.component';
import { MotorModule } from './Components/public/motorcycleDealership/motor.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PageNotFoundComponent,
    LandingComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MotorModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
