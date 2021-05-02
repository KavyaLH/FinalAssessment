import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './Component/header/header.component';
import { ContainerComponent } from './Component/container/container.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    EmployeeComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    HomeComponent,
    DashboardComponent,
    UpdateEmplyoeeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MyRouterRoutingModule,
    FormsModule

 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
