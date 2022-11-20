import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientRequest } from '../shared/service/http-request-service';
import { HostService } from '../shared/service/host.service';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

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
   * get all projet
   * @param id
   * @returns
   */
  getAllProjet(): Observable<any> {
    return this.http.getObject(this.authHost + "/projet/v0" );
  }

  /**
   * get projet by id
   * @param id
   * @returns
   */
  getProjetById(id: number): Observable<any> {
    return this.http.getObject(this.authHost + "/client/v0/" + id);
  }

  /**
   * add projet
   * @param projet
   * @returns
   */
  addProjet(projet: any): Observable<any> {
    return this.http.postObject(projet,this.authHost + "/projet/v0/");
  }

  /**
  * update projet
  * @param projet
  * @returns
  */
  updateProjet(projet: any): Observable<any> {
    return this.http.updateObject(projet,this.authHost + "/projet/v0/");
  }


  /**
   * delete projet
   * @param projet
   * @returns
   */
  deleteProjetById(projet: any): Observable<any> {
    return this.http.deleteObject(this.authHost + "/projet/v0/"+projet.idProjet);
  }

}
