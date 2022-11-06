import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientRequest } from '../shared/service/http-request-service';
import { HostService } from '../shared/service/host.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

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
   * get all client
   * @param id
   * @returns
   */
  getAllClient(): Observable<any> {
    return this.http.getObject(this.authHost + "/client/v0" );
  }

  /**
   * get client by id
   * @param id
   * @returns
   */
  getClientrById(id: number): Observable<any> {
    return this.http.getObject(this.authHost + "/client/v0/" + id);
  }

  /**
   * add client
   * @param user
   * @returns
   */
  addClient(user: any): Observable<any> {
    return this.http.postObject(user,this.authHost + "/client/v0/");
  }

  /**
  * update client
  * @param user
  * @returns
  */
  updateClient(user: any): Observable<any> {
    return this.http.updateObject(user,this.authHost + "/client/v0/");
  }


  /**
   * delete client
   * @param client
   * @returns
   */
  deleteclientrById(client: any): Observable<any> {
    return this.http.deleteObject(this.authHost + "/client/v0/"+client.idClient);
  }

}
