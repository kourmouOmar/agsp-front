import {
    HttpErrorResponse, HttpEvent, HttpHandler,
    HttpInterceptor, HttpRequest, HttpResponse
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {throwError} from "rxjs";
import {Observable} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import {HttpStatusConst} from "./HttpStatusResponses";
import {Location} from '@angular/common';
import { LoginService } from 'src/app/services/login.service';
import { HttpClientRequest } from '../service/http-request-service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(
        private loginService: LoginService,
        private router: Router, private http: HttpClientRequest,
        private location: Location,
    ) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let user: any = JSON.parse(localStorage.getItem("currentUser"));
        if (user && user.token_dto.token) {
            request = request.clone({
                setHeaders: {
                    "Authorization": user.token_dto.token
                }
            });
        }
        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if (error.status === HttpStatusConst.NOT_AUTHORIZED) {
                    if (user && user.token_dto.token) {
                        request = request.clone({
                            setHeaders: {
                                "Authorization": user.token_dto.token
                            }
                        });
                        return next.handle(request).pipe(
                            catchError((err: HttpErrorResponse) => {
                                return throwError(err);
                            })
                        )
                    } else {
                        this.loginService.logout();
                    }
                } else if (error.status === HttpStatusConst.FORBIDDEN) {
                } else if (error.status === HttpStatusConst.INTERNAL_SERVER_ERROR || error.status === HttpStatusConst.BAD_REQUEST) {
                }
                return throwError(error);
            })
        );
    }
}
