import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientRequest } from '../shared/service/http-request-service';
import { HostService } from '../shared/service/host.service';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  authHost: string;

  /**
   *
   * @param http
   * @param hostService
   */
  constructor(private http: HttpClientRequest, private hostService: HostService) {
    this.authHost = this.hostService.getAuthHost();
  }

  /**
   * get all utilisateur
   * @param id
   * @returns
   */
  getAllUtilisateur(): Observable<any> {
    return this.http.getObject(this.authHost + "/utilisateur/v0" );
  }

  /**
   * get utilisateur by id
   * @param id
   * @returns
   */
  getUtilisateurrById(id: number): Observable<any> {
    return this.http.getObject(this.authHost + "/utilisateur/v0/" + id);
  }

  /**
   * add utilisateur
   * @param user
   * @returns
   */
  addUtilisateurr(user: any): Observable<any> {
    return this.http.postObject(user,this.authHost + "/utilisateur/v0/");
  }

  /**
  * update utilisateur
  * @param user
  * @returns
  */
  updateUtilisateurr(user: any): Observable<any> {
    return this.http.updateObject(user,this.authHost + "/utilisateur/v0/");
  }


  /**
   * delete utilisateur
   * @param user
   * @returns
   */
  deleteUtilisateurrById(user: any): Observable<any> {
    return this.http.deleteObject(this.authHost + "/utilisateur/v0/"+user.idUtilisateur);
  }

}
