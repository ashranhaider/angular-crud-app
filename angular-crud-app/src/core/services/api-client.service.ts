import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiClientService {
  private http = inject(HttpClient);

  get<T>(url: string, options?: object) { return this.http.get<T>(url, options); }
  post<T>(url: string, body: unknown, options?: object) { return this.http.post<T>(url, body, options); }
  put<T>(url: string, body: unknown, options?: object) { return this.http.put<T>(url, body, options); }
  patch<T>(url: string, body: unknown, options?: object) { return this.http.patch<T>(url, body, options); }
  delete<T>(url: string, options?: object) { return this.http.delete<T>(url, options); }
}
