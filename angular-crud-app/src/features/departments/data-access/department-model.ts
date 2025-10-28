export interface Department {
  id: number;
  name: string;
}
export interface CreateDepartmentDto {
  name: string;
}
export interface UpdateDepartmentDto {
  id: number;
  name: string;
}