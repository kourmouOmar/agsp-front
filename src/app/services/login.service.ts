
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {map} from "rxjs/operators";
import 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HostService } from '../shared/service/host.service';
import { HttpClientRequest } from '../shared/service/http-request-service';
@Injectable({
    providedIn: 'root'
})
export class LoginService {
     /**
     * Back end auth host
     */
    private readonly host;

    /**
     * Constructor
     * @param http : http service
     * @param hostService : host service
     */

    constructor(
                private hostService: HostService,
                private router: Router,
                private httpClient: HttpClient,
                private http:HttpClientRequest
                ) {
        this.host = this.hostService.getAuthHost();
    }

    /**
     * Demande d'authentification + encodage password
     *
     * @param username
     * @param password
     */
    authUser(username:string, password:string) {
        localStorage.clear();
        const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});
        return this.httpClient.post<any>(this.hostService.getAuthHost() + '/v1/auth', {'username':username,'password':password}, {headers}).pipe(
            map(user => {
            /* store user details and jwt token in local storage to keep user logged in between page refreshes */
            localStorage.setItem('currentUser',JSON.stringify(user));
            return user;
        }));
    }




    isLogged() {
      let loggeduser = localStorage.getItem('currentUser');
      return !!loggeduser;
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['']).then(() => {});
    }


}
