import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './Component/header/header.component';
import { EmployeeComponent } from './Component/employee/employee.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MyRouterRoutingModule } from './my-router/my-router-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateEmplyoeeComponent } from './update-emplyoee/update-emplyoee.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/Table';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    HomeComponent,
    DashboardComponent,
    UpdateEmplyoeeComponent,
    LoginComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MyRouterRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    Ng2SearchPipeModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
