import { Component, inject } from '@angular/core';
import { EmployeeForm } from '../../employee-form/employee-form/employee-form';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesApi } from '../../data-access/employees.api';
import { CreateEmployeeDto } from '../../data-access/employees.models';

@Component({
  selector: 'add-employee',
  imports: [EmployeeForm],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee {
 private api = inject(EmployeesApi);
  private router = inject(Router);
  busy = false;
  
  create(dto: CreateEmployeeDto) {
    this.busy = true;
    this.api.create(dto).subscribe({
      next: () => { this.busy = false; this.router.navigate(['/employees']); },
      error: () => { this.busy = false; /* show toast */ }
    });
  }
goBack() { this.router.navigate(['/employees']); }
}
