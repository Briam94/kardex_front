import { FormControl, FormGroupDirective, NgForm } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const isSubmitted = form && form.submitted;
      return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
  }

export enum Url {
  localhost = 'http://localhost:8090/',
  getUser = 'user/get/user',
  createUser = 'user/create/user',
  login = 'user/login/user',
  getUserParam = 'email',
  createProduct = 'product/create/product',
  updateProduct = 'product/update/product',
  getProducts = 'product/get/products',
  createSale = 'sale/create/sale',
}

export enum Modules {
  products = 'products',
  shopping = 'shopping'
}

export interface DialogData {
  productsSend: any;
}