import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Department } from '../data-access/department-model';
import { DepartmentApi } from '../data-access/department.api';

@Component({
  selector: 'delete-department',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-department.html',
  styleUrls: ['./delete-department.css']
})
export class DeleteDepartment implements OnChanges {
  private api = inject(DepartmentApi);

  /** Parent controls visibility */
  @Input() open = false;
  /** Id passed in from parent */
  @Input() departmentId: number | null = null;

  /** Emitted when user cancels or after successful delete */
  @Output() closed = new EventEmitter<void>();
  /** Emitted on successful delete with the deleted id */
  @Output() deleted = new EventEmitter<number>();

  loading = false;
  deleting = false;
  error: string | null = null;
  department: Department | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    
    // Whenever the modal opens with a valid id, (re)load the department
    if ((changes['open'] || changes['departmentId']) && this.open && Number.isFinite(this.departmentId)) {
      this.loadDepartment();
    }
  }

  private loadDepartment(): void {
    if (!Number.isFinite(this.departmentId)) {
      this.error = 'Invalid department id.';
      return;
    }

    this.loading = true;
    this.error = null;
    this.department = null;

    this.api.get(this.departmentId as number).subscribe({
      next: (dept) => {
        this.department = dept ?? null;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.status === 404 ? 'Department not found.' : 'Failed to load department.';
        this.loading = false;
      }
    });
  }

  confirmDelete(): void {
    if (!Number.isFinite(this.departmentId) || this.deleting) return;

    this.deleting = true;
    this.error = null;

    this.api.delete(this.departmentId as number).subscribe({
      next: () => {
        this.deleting = false;
        this.deleted.emit(this.departmentId as number);
        this.closed.emit();
      },
      error: () => {
        this.deleting = false;
        this.error = 'Failed to delete department.';
      }
    });
  }

  cancel(): void {
    this.closed.emit();
  }
}
