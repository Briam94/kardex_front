import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Url } from '../../utils/utils.services';

@Injectable({
  providedIn: 'root'
})
export class SaleServiceService {
  url: string = Url.localhost;

  constructor(private http: HttpClient) { }

  createSale(user: any){
    return this.http.post(this.url + Url.createSale, user,
      {responseType: 'text'})
      .pipe(map((response: any) => {
        response = JSON.parse(response);
        return response;
      }, (error: any) => error));
  }
}
