import { Component, inject, signal } from '@angular/core';
import { Department } from '../data-access/department-model';
import { DepartmentApi } from '../data-access/department.api';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-departments',
  imports: [CommonModule, RouterLink],
  templateUrl: './departments.html',
  styleUrls: ['./departments.css'] 
})
export class DepartmentsComponent {
  private departmentApi = inject(DepartmentApi);
  
departments = signal<Department[]>([]);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.loading.set(true);
    this.error.set(null);

    this.departmentApi.list().subscribe({
      next: (data) => {
        
        this.departments.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error(err);
        this.error.set('Failed to load employees');
        this.loading.set(false);
      },
    });
  }
  trackById = (_: number, item: Department) => item.id;
}