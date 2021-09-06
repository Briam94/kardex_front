import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Url } from '../../utils/utils.services';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = Url.localhost;

  constructor(private http: HttpClient) { }

  login(trama: any){
    return this.http.post(this.url + Url.login, trama,
      {responseType: 'text'})
      .pipe(map((response: any) => {
        response = JSON.parse(response);
        return response;
      }, (error: any) => error));
  }
}
