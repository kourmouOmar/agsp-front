import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class FrontInterceptor implements HttpInterceptor {
  notifOptions: any;

  constructor (private router: Router,
               ) {
    this.notifOptions = {
      id: null,
      preventDuplicates: true,
      preventLastDuplicates: 'visible',
      showProgressBar: true,
      maxStack: 5
    };
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }));
  }
}
