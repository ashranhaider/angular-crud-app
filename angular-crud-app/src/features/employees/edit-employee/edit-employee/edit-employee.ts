import { Component, inject } from '@angular/core';
import { EmployeeForm } from '../../employee-form/employee-form/employee-form';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesApi } from '../../data-access/employees.api';
import { CommonModule } from '@angular/common';
import { Employee, UpdateEmployeeDto } from '../../data-access/employees.models';
import { ToastService } from '../../../../core/services/toast.service';

@Component({
  selector: 'edit-employee',  
  imports: [EmployeeForm, CommonModule],
  templateUrl: './edit-employee.html',
  styleUrl: './edit-employee.css'
})
export class EditEmployee {
  
  private route = inject(ActivatedRoute);
  private api = inject(EmployeesApi);
  private router = inject(Router);  
  private toast = inject(ToastService);
  
  employee: Employee | null = null;
  busy = false;

 ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (Number.isFinite(id)) {
      this.api.get(id).subscribe(emp => this.employee = emp);
    }
  }
  
  update(id:number, dto: UpdateEmployeeDto) {
    this.busy = true;
    this.api.update(id, dto).subscribe({
      next: () => { 
        this.busy = false;
        this.toast.success('Employee updated successfully.');
        this.router.navigate(['/employees']);        
      },
      error: () => { this.busy = false;
        
        this.toast.error('Failed to update employee');}
    });
  }
goBack() { this.router.navigate(['/employees']); }
}
