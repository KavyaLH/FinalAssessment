import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from '../Component/employee/employee.component';
import { HeaderComponent } from '../Component/header/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { RegistrationComponent } from '../registration/registration.component';
import { UpdateEmplyoeeComponent } from '../update-emplyoee/update-emplyoee.component';

const routes: Routes = [
  {path:'home',component: DashboardComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'view',component:EmployeeComponent},
  {path:'update',component:UpdateEmplyoeeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MyRouterRoutingModule { }
