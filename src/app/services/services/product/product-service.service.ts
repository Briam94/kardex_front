import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Url } from '../../utils/utils.services';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  url: string = Url.localhost;

  constructor(private http: HttpClient) { }

  createProduct(product: any){
    return this.http.post(this.url + Url.createProduct, product,
      {responseType: 'text'})
      .pipe(map((response: any) => {
        response = JSON.parse(response);
        return response;
      }, (error: any) => error));
  }
  
  getProducts(){
    return this.http.get(this.url + Url.getProducts, 
      {responseType: 'text'})
      .pipe(map((response: any) => {
        response = JSON.parse(response);
        return response;
      }, (error: any) => error));
  }

  updateProduct(product: any){
    return this.http.put(this.url + Url.updateProduct, product,
      {responseType: 'text'})
      .pipe(map((response: any) => {
        response = JSON.parse(response);
        return response;
      }, (error: any) => error));
  }

}
