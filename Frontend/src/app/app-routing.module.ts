import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
// import { Home2Component } from './components/home2/home2.component';
=======
>>>>>>> 4994324b9a9d9ed2513d866306dec38ba47fe9a3
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component'
import { ShiftMonthComponent } from './employee/shift-month/shift-month.component'
import { EmployeeArchiveComponent } from './employee/employee-archive/employee-archive.component'
import { ShiftAvailableComponent } from './employee/shift-available/shift-available.component'

import { NonPerishablesComponent } from './inventory/non-perishables/non-perishables.component';
import { PerishablesComponent } from './inventory/perishables/perishables.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent  
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'inventory_non_perishables',
    component: NonPerishablesComponent
  },
  {
    path: 'inventory_perishables',
    component: PerishablesComponent
  },
   {
     path: 'employee',
     component: EmployeeHomeComponent
   },
  {
    path: 'shiftmonth',
    component: ShiftMonthComponent
  },
  {
    path: 'shiftavailable',
    component: ShiftAvailableComponent
  },
  {
    path: 'employeearchive',
    component: EmployeeArchiveComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }