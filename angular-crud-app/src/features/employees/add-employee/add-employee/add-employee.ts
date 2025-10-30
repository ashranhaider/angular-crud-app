import { Component, inject } from '@angular/core';
import { EmployeeForm } from '../../employee-form/employee-form/employee-form';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesApi } from '../../data-access/employees.api';
import { CreateEmployeeDto } from '../../data-access/employees.models';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'add-employee',
  imports: [EmployeeForm],
  templateUrl: './add-employee.html',
  styleUrl: './add-employee.css'
})
export class AddEmployee {
  private api = inject(EmployeesApi);
  private router = inject(Router);  
  private toast = inject(ToastService);

  busy = false;
  
  create(dto: CreateEmployeeDto) {
    this.busy = true;
    this.api.create(dto).subscribe({
      next: () => { 
        this.toast.success('Employee created successfully.');
        this.busy = false; this.router.navigate(['/employees']);
      },
      error: () => { 
        this.busy = false;
        
        this.toast.error('Failed to create employee');
       }
    });
  }
goBack() { this.router.navigate(['/employees']); }
}
