import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './shared/components/home/home.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { UserComponent } from './shared/components/user/user.component';
import { ProductComponent } from './shared/components/product/product.component';
import { GetconfirmComponent } from './shared/components/getconfirm/getconfirm.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { ProdDashComponent } from './shared/components/prod-dash/prod-dash.component';
import { ProdFormComponent } from './shared/components/prod-form/prod-form.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { UserDashComponent } from './shared/components/user-dash/user-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AuthComponent,
    UserComponent,
    ProductComponent,
    GetconfirmComponent,
    FairsComponent,
    ProdDashComponent,
    ProdFormComponent,
    UserFormComponent,
    UserDashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
