import { ChangeDetectionStrategy, Component, EventEmitter, inject, Input, OnChanges, Output, signal, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreateEmployeeDto, Employee } from '../../data-access/employees.models';
import { Department } from '../../../departments/data-access/department-model';
import { DepartmentApi } from '../../../departments/data-access/department.api';
import { CommonModule } from '@angular/common';

type EmployeeFormValue = CreateEmployeeDto;

@Component({
  standalone: true,
  selector: 'employee-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EmployeeForm implements OnChanges {

  @Input() employee: Employee | null = null;          // for edit
  @Input() submitLabel = 'Save';
  @Input() busy = false;
  @Input() showCancel = true;

  @Output() save = new EventEmitter<EmployeeFormValue>(); // emits typed value
  @Output() cancel = new EventEmitter<void>();

  private departmentApi = inject(DepartmentApi);

  departments = signal<Department[]>([]);
  departmentsLoading = signal<boolean>(true);
  departmentsError = signal<string | null>(null);

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    position: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    departmentId: new FormControl<number | null>(null, [Validators.required])
  });
  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.employee) {
      const { id, ...rest } = this.employee;
      this.form.reset(rest); // reset keeps validators; ‘rest’ matches CreateEmployeeDto
    }
  }
  ngOnInit() {
    this.loadDepartments();
  }
  loadDepartments() {
    this.departmentsLoading.set(true);
    this.departmentsError.set(null);

    this.departmentApi.list().subscribe({
      next: (data) => {

        this.departments.set(data);
        this.departmentsLoading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.departmentsError.set('Failed to load employees');
        console.log(err);
        this.departmentsLoading.set(false);
      },
    });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    // Optional: trim strings
    const trimmed: EmployeeFormValue = {
      ...value,
      fullName: value.name ? value.name?.trim() : '',
      email: value.email ? value.email?.trim() : '',
      position: value.position ? value.position?.trim() : '',
      departmentId: value.departmentId
    };
    console.log(trimmed);
    this.save.emit(trimmed);
  }

  onCancel(): void {
    this.cancel.emit();
  }

  // convenience getters for template
  get f() { return this.form.controls; }
}
