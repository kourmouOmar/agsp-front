import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClientRequest } from '../shared/service/http-request-service';
import { HostService } from '../shared/service/host.service';

@Injectable({
  providedIn: 'root'
})
export class BureauEtudeService {

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
   * get all bureau etudes
   * @returns
   */
  getAllBueauEtudes(): Observable<any> {
    return this.http.getObject(this.authHost + "/bureau-etude/v0" );
  }

  /**
   * get bureau etude by id
   * @param id
   * @returns
   */
  getBureauEtudeById(id: number): Observable<any> {
    return this.http.getObject(this.authHost + "/bureau-etude/v0/" + id);
  }

  /**
   * add bureau etude
   * @param bureau
   * @returns
   */
  addBureauEtude(bureau: any): Observable<any> {
    return this.http.postObject(bureau,this.authHost + "/bureau-etude/v0/");
  }

  /**
  * update bureau etude
  * @param bureau
  * @returns
  */
  updateBureauEtudeById(bureau: any): Observable<any> {
    return this.http.updateObject(bureau,this.authHost + "/bureau-etude/v0/");
  }


  /**
   * delete bureau etude
   * @param bureau
   * @returns
   */
  deleteBureauEtudeById(bureau: any): Observable<any> {
    return this.http.deleteObject(this.authHost + "/bureau-etude/v0/"+bureau.idBureauEtude);
  }

}
