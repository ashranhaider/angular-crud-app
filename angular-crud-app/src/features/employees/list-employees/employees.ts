import { Component, inject, signal } from '@angular/core';
import { EmployeesApi } from '../data-access/employees.api';
import { Employee } from '../data-access/employees.models';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, RouterLink],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class EmployeesComponent {
private employeesApi = inject(EmployeesApi);

  // Using Angular Signals (best practice in Angular 17+)
  employees = signal<Employee[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.loading.set(true);
    this.error.set(null);

    this.employeesApi.list().subscribe({
      next: (data) => {
        
        this.employees.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set('Failed to load employees');
        this.loading.set(false);
      },
    });
  }
  trackById = (_: number, item: Employee) => item.id;
}