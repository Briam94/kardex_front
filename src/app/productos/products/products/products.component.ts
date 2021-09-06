import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProductServiceService } from 'src/app/services/services/product/product-service.service';
import { MyErrorStateMatcher } from 'src/app/services/utils/utils.services';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productForm: FormGroup;
  products: any;
  displayedColumns: string[] = ['producName', 'productDescription', 'productStock', 'productPrice', 'options'];
  idProduct: number = 0;
  editProduct = false;
  
  constructor( private productServices: ProductServiceService) {
    this.productForm = new FormGroup({
      productName: new FormControl('', [Validators.required]),
      productoDescription: new FormControl(''),
      productStock: new FormControl('', [Validators.required]),
      productPrice: new FormControl('', [Validators.required])
    });
    this.getAllProductos();
  }
  
  ngOnInit(): void {
  }

  getAllProductos(){
    const getAllProducts = this.productServices.getProducts().subscribe(data => {
      if(data.code == '1'){
        this.products = new MatTableDataSource(data.description);
      }
      getAllProducts.unsubscribe();
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.products.filter = filterValue.trim().toLowerCase();
  }
  
  registProduct(){
    const json = {
      data: {
        producName: this.productForm.controls.productName.value,
        productDescription: this.productForm.controls.productoDescription.value,
        productStock: this.productForm.controls.productStock.value,
        productPrice: this.productForm.controls.productPrice.value
      }
    }
    const createProduct = this.productServices.createProduct(json).subscribe(data => {
      if(data.code == '1'){
        this.productForm.reset();
        this.getAllProductos();
      }
      alert(data.message);
      createProduct.unsubscribe();
    });
  }

  EditProduct(product: any){
    console.log(product)
    this.productForm.controls.productName.setValue(product.producName);
    this.productForm.controls.productoDescription.setValue(product.productDescription);
    this.productForm.controls.productStock.setValue(product.productStock);
    this.productForm.controls.productPrice.setValue(product.productPrice);
    this.idProduct = product.productId;
    this.editProduct = true;
    window.scroll(0,0);
  }

  updateProduct(){
    const json = {
      data: {
        productId: this.idProduct,
        producName: this.productForm.controls.productName.value,
        productDescription: this.productForm.controls.productoDescription.value,
        productStock: this.productForm.controls.productStock.value,
        productPrice: this.productForm.controls.productPrice.value
      }
    }
    const updateProduct = this.productServices.updateProduct(json).subscribe(data => {
      if(data.code == '1'){
        this.idProduct = 0;
        this.editProduct = false;
        this.productForm.reset();
        this.getAllProductos();
      }
      alert(data.message);
      updateProduct.unsubscribe();
    });

  }

}
