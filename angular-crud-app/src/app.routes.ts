import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';
import { HomeComponent } from './features/home-component/home-component';
import { EmployeesComponent } from './features/employees/list-employees/employees';
import { DepartmentsComponent } from './features/departments/list-departments/departments';
import { AddEmployee } from './features/employees/add-employee/add-employee/add-employee';
import { EditEmployee } from './features/employees/edit-employee/edit-employee/edit-employee';
import { EditDepartment } from './features/departments/edit-department/edit-department';
import { AddDepartment } from './features/departments/add-department/add-department';

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
  },
  {
    path: 'editemployees/:id',
    component: EditEmployee
  }
  ,
  {
    path: 'departments',
    component: DepartmentsComponent
  },
  {
    path: 'add-department',
    component: AddDepartment
  },
  {
    path: 'edit-department/:id',
    component: EditDepartment
  },
  { path: '**', redirectTo: '' }
];
