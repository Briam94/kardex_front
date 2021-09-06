import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASEURL } from './../../../assets/urlConfig/urlConfig';

@Injectable()
export class ComponenteHijo1Service {

  constructor(private http: HttpClient) { }

}
