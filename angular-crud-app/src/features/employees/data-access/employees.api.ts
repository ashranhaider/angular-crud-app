import { inject, Injectable } from '@angular/core';
import { ApiClientService } from '../../../core/services/api-client.service';
import { Employee, CreateEmployeeDto, UpdateEmployeeDto } from './employees.models';

@Injectable({ providedIn: 'root' })
export class EmployeesApi {
  private api = inject(ApiClientService);

  list   = () => this.api.get<Employee[]>('/employees');
  get    = (id: number) => this.api.get<Employee>(`/employees/${id}`);
  create = (dto: CreateEmployeeDto) => this.api.post<Employee>('/employees', dto);
  update = (id: number, dto: UpdateEmployeeDto) => this.api.put<Employee>(`/employees/${id}`, dto);
  delete = (id: number) => this.api.delete<void>(`/employees/${id}`);
}
