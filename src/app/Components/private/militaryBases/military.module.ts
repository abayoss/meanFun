import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { ListBaseComponent } from './list-base/list-base.component';
import { ShowBaseComponent } from './show-base/show-base.component';
import { EditBaseComponent } from './edit-base/edit-base.component';
import { AddBaseComponent } from './add-base/add-base.component';
import { AuthInterceptor } from '../auth/auth.interceptor';

@NgModule({
  imports: [CommonModule, HttpClientModule, AppRoutingModule, FormsModule],
  declarations: [
    ListBaseComponent,
    AddBaseComponent,
    ShowBaseComponent,
    EditBaseComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class MilitaryModule {}
