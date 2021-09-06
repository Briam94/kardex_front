import { Injectable } from '@angular/core';
import { Url } from '../../utils/utils.services';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {
  url: string = Url.localhost;

  constructor(private http: HttpClient) { }

  createUser(user: any){
    return this.http.post(this.url + Url.createUser, user,
      {responseType: 'text'})
      .pipe(map((response: any) => {
        response = JSON.parse(response);
        return response;
      }, (error: any) => error));
  }
}
