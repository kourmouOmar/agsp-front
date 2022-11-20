import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientRequest } from '../shared/service/http-request-service';
import { HostService } from '../shared/service/host.service';

@Injectable({
  providedIn: 'root'
})
export class BureauControleService {

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
   * get all bureau controle
   * @returns
   */
  getAllBueauControles(): Observable<any> {
    return this.http.getObject(this.authHost + "/bureau-controle/v0" );
  }

  /**
   * get bureau controle by id
   * @param id
   * @returns
   */
  getBureauControleById(id: number): Observable<any> {
    return this.http.getObject(this.authHost + "/bureau-controle/v0/" + id);
  }

  /**
   * add bureau controle
   * @param bureau
   * @returns
   */
  addBureauControle(bureau: any): Observable<any> {
    return this.http.postObject(bureau,this.authHost + "/bureau-controle/v0/");
  }

  /**
  * update bureau controle
  * @param bureau
  * @returns
  */
  updateBureauControleById(bureau: any): Observable<any> {
    return this.http.updateObject(bureau,this.authHost + "/bureau-controle/v0/");
  }


  /**
   * delete bureau controle
   * @param bureau
   * @returns
   */
  deleteBureauControleById(bureau: any): Observable<any> {
    return this.http.deleteObject(this.authHost + "/bureau-controle/v0/"+bureau.idBureauControle);
  }

}
