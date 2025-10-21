import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';

export const errorInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(
    // minimal example; you can add toast service here
    // catchError((err: HttpErrorResponse) => { ...; return throwError(() => err); })
  );
