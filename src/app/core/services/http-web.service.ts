import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { APP_CONFIG } from 'src/app/app.config';


@Injectable()
export class HttpWebService {

  apiUrl: string;

  constructor(
    private http: HttpClient

  ) {
    this.apiUrl = APP_CONFIG.API_URL;
  }

  getRequestHeaders(anonymous: boolean = false) {

    if (anonymous) {
      return new HttpHeaders()
        .append('Content-Type', 'application/json')
    }

    return new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', localStorage.getItem('tokenAuthorization'))
  }

  get(path: string, params: any = {}, anonymous = false): Promise<any> {
    let url = this.apiUrl + path;
    return this.http.get(url, { headers: this.getRequestHeaders(anonymous), params: params })
      .toPromise()
      //.then(rslt => rslt) uncomment if use especific format response
      .catch(this.handleError);
  }

  getFullURL(url: string, params: any = {}, anonymous = false): Promise<any> {
    return this.http.get(url, { headers: this.getRequestHeaders(anonymous), params: params })
      .toPromise()
      //.then(rslt => rslt) uncomment| if use especific format response
      .catch(this.handleError);
  }

  post(path: string, body: any = {}, anonymous = false): Promise<any> {
    let url = `${this.apiUrl}${path}`;
    return this.http.post(url, JSON.stringify(body), { headers: this.getRequestHeaders(anonymous) })
      .toPromise()
      //.then(rslt => rslt) uncomment| if use especific format response
      .catch(this.handleError);
  }

  postFullURL(url: string, body: any = {}, anonymous = false): Promise<any> {
    return this.http.post(url, JSON.stringify(body), { headers: this.getRequestHeaders(anonymous) })
      .toPromise()
      //.then(rslt => rslt) uncomment| if use especific format response
      .catch(this.handleError);
  }

  put(path: string, body: any = {}, anonymous = false): Promise<any> {
    let url = `${this.apiUrl}${path}`;
    return this.http.put(url, JSON.stringify(body), { headers: this.getRequestHeaders(anonymous) })
      .toPromise()
      //.then(rslt => rslt) uncomment| if use especific format response
      .catch(this.handleError);
  }

  putFullURL(url: string, body: any = {}, anonymous = false): Promise<any> {
    return this.http.put(url, JSON.stringify(body), { headers: this.getRequestHeaders(anonymous) })
      .toPromise()
      //.then(rslt => rslt) uncomment| if use especific format response
      .catch(this.handleError);
  }

  delete(path: string, params: any = {}, anonymous = false): Promise<any> {
    let url = this.apiUrl + path;
    return this.http.delete(url, { headers: this.getRequestHeaders(anonymous), params: params })
      .toPromise()
      //.then(rslt => rslt) uncomment| if use especific format response
      .catch(this.handleError);
  }

  private handleError(error: any): any {
    console.error('HttpWebService => handleError ', error);
    throw error;
  }

}
