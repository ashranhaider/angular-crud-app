import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';
import { HomeComponent } from './features/home-component/home-component';
import { EmployeesComponent } from './features/employees/employees';
import { DepartmentsComponent } from './features/departments/departments';

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
    path: 'departments',
    component: DepartmentsComponent    
  },
  { path: '**', redirectTo: '' }
];
