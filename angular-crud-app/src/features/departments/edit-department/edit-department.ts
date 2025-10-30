import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartmentApi } from '../data-access/department.api';
import { Department } from '../data-access/department-model';
import { ToastService } from '../../../core/services/toast.service';

@Component({
  selector: 'edit-department',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-department.html',
  styleUrls: ['./edit-department.css']
})
export class EditDepartment {
  private api = inject(DepartmentApi);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private toast = inject(ToastService);

  busy = false;
  loading = true;
  loadError: string | null = null;
  notFound = false;

  id!: number;
  model: { name: string } = { name: '' };

  ngOnInit(): void {
    const rawId = this.route.snapshot.paramMap.get('id');
    const id = Number(rawId);
    if (!Number.isFinite(id)) {
      this.loadError = 'Invalid department id.';
      this.loading = false;
      return;
    }

    this.id = id;
    this.api.get(this.id).subscribe({
      next: (dept: Department) => {
        if (!dept) {
          this.notFound = true;
        } else {
          this.model.name = dept.name ?? '';
        }
        this.loading = false;
      },
      error: (err) => {
        if (err?.status === 404) {
          this.notFound = true;
        } else {
          this.loadError = 'Failed to load department.';
        }
        this.loading = false;
      }
    });
  }

  save(form: NgForm): void {
    if (this.busy) return;

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.busy = true;
    const dto = { name: this.model.name.trim() };

    this.api.update(this.id, dto).subscribe({
      next: () => {
        this.busy = false;
        this.toast.success('Department updated successfully.');
        this.router.navigate(['/departments']); // adjust to your list route
      },
      error: () => {
        this.busy = false;
        this.toast.error('Department update failed.');
        // TODO: show toast/snackbar
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/departments']); // adjust to your list route
  }
}
