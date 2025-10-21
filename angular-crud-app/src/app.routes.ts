import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';
import { HomeComponent } from './features/home-component/home-component';
import { EmployeesComponent } from './features/employees/list-employees/employees';
import { DepartmentsComponent } from './features/departments/departments';
import { AddEmployee } from './features/employees/add-employee/add-employee/add-employee';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent    
  },
   {
    path: 'employees',
    component: EmployeesComponent    
  },
  {
    path: 'addemployees',
    component: AddEmployee    
  }
  ,
   {
    path: 'departments',
    component: DepartmentsComponent    
  },
  { path: '**', redirectTo: '' }
];
