import { inject, Injectable } from '@angular/core';
import { ApiClientService } from '../../../core/services/api-client.service';
import { CreateDepartmentDto, Department, UpdateDepartmentDto } from './department-model';

@Injectable({ providedIn: 'root' })
export class DepartmentApi {
  private api = inject(ApiClientService);

  list   = () => this.api.get<Department[]>('/Departments');
  get    = (id: number) => this.api.get<Department>(`/Departments/${id}`);
  create = (dto: CreateDepartmentDto) => this.api.post<Department>('/Departments', dto);
  update = (id: number, dto: UpdateDepartmentDto) => this.api.put<Department>(`/Departments/${id}`, dto);
  remove = (id: number) => this.api.delete<void>(`/Departments/${id}`);
}
