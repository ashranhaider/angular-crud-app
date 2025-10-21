import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  // Only prefix relative URLs
  const isAbsolute = /^https?:\/\//i.test(req.url);
  const url = isAbsolute ? req.url : `${environment.apiBaseUrl}${req.url.startsWith('/') ? '' : '/'}${req.url}`;
  return next(req.clone({ url }));
};
