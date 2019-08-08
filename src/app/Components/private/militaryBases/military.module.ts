import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBaseComponent } from './list-base/list-base.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ShowBaseComponent } from './show-base/show-base.component';
import { EditBaseComponent } from './edit-base/edit-base.component';
import { AddBaseComponent } from './add-base/add-base.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, AppRoutingModule, FormsModule],
  declarations: [
    ListBaseComponent,
    AddBaseComponent,
    ShowBaseComponent,
    EditBaseComponent
  ]
})
export class MilitaryModule {}
