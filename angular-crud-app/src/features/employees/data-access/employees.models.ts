import { Department } from "../../departments/data-access/department-model";

export interface Employee {
  id: number;
  fullName: string;
  email: string;
  position: string;
  departmentId: number;
  department?: Department;
}

export interface CreateEmployeeDto {
  fullName: string;
  email: string;
  position: string;
  departmentId: number | null;
}

export type UpdateEmployeeDto = Partial<CreateEmployeeDto>;
