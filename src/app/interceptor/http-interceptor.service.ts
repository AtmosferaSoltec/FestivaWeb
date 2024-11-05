import {
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export function httpInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  
  const token = localStorage.getItem(environment.token);
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  
  const reqClon = req.clone({
    headers,
  });

  return next(reqClon).pipe(
    catchError((err) => {
      const data = err?.error;
      return throwError(data?.message || 'Error desconocido');
    })
  );
}
