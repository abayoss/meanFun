import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ListMotorComponent } from './list-motor/list-motor.component';
import { ShowMotorComponent } from './show-motor/show-motor.component';
import { EditMotorComponent } from './edit-motor/edit-motor.component';
import { AddMotorComponent } from './add-motor/add-motor.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [
    ListMotorComponent,
    AddMotorComponent,
    ShowMotorComponent,
    EditMotorComponent
  ]
})
export class MotorModule {}
