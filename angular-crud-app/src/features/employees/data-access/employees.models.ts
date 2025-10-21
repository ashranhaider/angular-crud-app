export interface Employee {
  id: number;
  fullName: string;
  email: string;
  position: string;
  departmentId: number;
  department?: Department;
}
export interface Department {
  id: number;
  name: string;
}
export interface CreateEmployeeDto {
  name: string;
  email: string;
  departmentId: number;
}

export type UpdateEmployeeDto = Partial<CreateEmployeeDto>;
