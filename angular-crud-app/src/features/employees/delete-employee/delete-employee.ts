import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesApi } from '../data-access/employees.api';
import { Employee } from '../data-access/employees.models';

@Component({
  selector: 'delete-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delete-employee.html',
  styleUrls: ['./delete-employee.css']
})
export class DeleteEmployee implements OnChanges {
  private api = inject(EmployeesApi);

  /** Parent controls visibility */
  @Input() open = false;
  /** Employee id from parent */
  @Input() employeeId: number | null = null;

  /** Emits when modal closes (cancel or after delete) */
  @Output() closed = new EventEmitter<void>();
  /** Emits the deleted employee id on success */
  @Output() deleted = new EventEmitter<number>();

  loading = false;
  deleting = false;
  error: string | null = null;
  employee: Employee | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    // load employee details whenever opened or id changes
    if ((changes['open'] || changes['employeeId']) && this.open && Number.isFinite(this.employeeId)) {
      this.loadEmployee();
    }
  }

  private loadEmployee(): void {
    if (!Number.isFinite(this.employeeId)) {
      this.error = 'Invalid employee id.';
      return;
    }
    this.loading = true;
    this.error = null;
    this.employee = null;

    this.api.get(this.employeeId as number).subscribe({
      next: (emp) => {
        this.employee = emp ?? null;
        this.loading = false;
      },
      error: (err) => {
        this.error = err?.status === 404 ? 'Employee not found.' : 'Failed to load employee.';
        this.loading = false;
      }
    });
  }

  confirmDelete(): void {
    if (!Number.isFinite(this.employeeId) || this.deleting) return;

    this.deleting = true;
    this.error = null;

    this.api.delete(this.employeeId as number).subscribe({
      next: () => {
        this.deleting = false;
        this.deleted.emit(this.employeeId as number);
        this.closed.emit();
      },
      error: () => {
        this.deleting = false;
        this.error = 'Failed to delete employee.';
      }
    });
  }

  cancel(): void {
    this.closed.emit();
  }
}
