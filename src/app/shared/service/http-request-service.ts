import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL_BOUCHON = '';

@Injectable()
export class HttpClientRequest {

    constructor(
        private httpClient: HttpClient,
      ) {}

     /**
   * Get object method
   * '@param' urlAppend
   * '@param' 'isBouchon
   * '@param' option
   */
  public getObject<T>(
    urlAppend: string,
    isBouchon?: boolean,
    option?: {}
  ): Observable<T> {
    return this.httpClient.get<any>(
      isBouchon ? URL_BOUCHON : urlAppend,
      !this.isNullOrUndefined(option) ? option : this.initOptionHeader()
    );
  }

  public  isNullOrEmpty(src: String): Boolean {
    return src === undefined || src === null || src.length === 0 || src.trim().length === 0;
  }
  public  isNullOrUndefined(obj: any) {
    return obj === undefined || obj === null;
  }



  /**
   *
   * '@param' body
   * '@param' urlAppend
   * '@param' isAuth
   * '@param' isBouchon
   * '@param' option
   */
  public postObject<T>(
    body: {},
    urlAppend: string,
    isAuth?: boolean,
    isBouchon?: boolean,
    option?: {}
  ): Observable<T> {
    return this.httpClient.post<T>(
      isBouchon ? URL_BOUCHON : urlAppend,
      body,
      !this.isNullOrUndefined(option) ? option : this.initOptionHeader()
    );
  }

  /**
   *
   * '@param' body
   * '@param' urlAppend
   * '@param' isBouchon
   * '@param' option
   */
  public updateObject<T>(
    body: object,
    urlAppend: string,
    isBouchon?: boolean,
    option?: {}
  ): Observable<T> {
    return this.httpClient.put<T>(
      isBouchon ? URL_BOUCHON : urlAppend,
      body,
      !this.isNullOrUndefined(option) ? option : this.initOptionHeader()
    );
  }

  /**
   *
   * '@param' urlAppend
   * '@param' isBouchon
   * '@param' option
   */
  public deleteObject<T>(
    urlAppend: string,
    isBouchon?: boolean,
    option?: {}
  ): Observable<T> {
    return this.httpClient.delete<T>(
      isBouchon ? URL_BOUCHON : urlAppend,
      !this.isNullOrUndefined(option) ? option : this.initOptionHeader()
    );
  }


  initOptionHeaderForBlob() {
    const options = {
      headers: this.initHttpHeader(),
      responseType: 'blob' as 'blob',
    };
    return options;
  }

  initOptionHeader() {
    const options = {
      headers: this.initHttpHeader(),
    };
    return options;
  }

  initHttpHeader() {
    const userJson = localStorage.getItem('currentUser') ;
    let curentUser:any =JSON.parse(userJson || '{}');
    let token = curentUser.token_dto.token
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token,
    });
  }
}
