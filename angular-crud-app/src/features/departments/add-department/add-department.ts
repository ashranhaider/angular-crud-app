import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DepartmentApi } from '../data-access/department.api';
import { CreateDepartmentDto } from '../data-access/department-model';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'add-department',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-department.html',
  styleUrls: ['./add-department.css']
})
export class AddDepartment {
  private api = inject(DepartmentApi);
  private router = inject(Router);
  private toast = inject(ToastService);

  busy = false;

  // single-field model for template-driven binding
  model: CreateDepartmentDto = {name: '' };

  goBack(): void {
    this.router.navigate(['/departments']);
  }

  createDepartment(form: NgForm): void {
    if (this.busy) return;

    // prevent empty/short names on submit
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.busy = true;
    this.api.create(this.model).subscribe({
      next: () => {
        this.busy = false;
        this.toast.success('Department created successfully.');
        this.router.navigate(['/departments']);
      },
      error: (err) => {
        this.busy = false;
        this.toast.error('Failed to create department ' + err.message);
        // TODO: plug in your toast/snackbar service
        // this.toastr.error('Failed to create department');
      }
    });
  }

  reset(form: NgForm): void {
    form.resetForm();
  }
}
