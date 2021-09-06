import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductServiceService } from 'src/app/services/services/product/product-service.service';
import { DialogData } from 'src/app/services/utils/utils.services';
import { ShoppingCarrComponent } from '../shopping-carr/shopping-carr/shopping-carr.component';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  products: any;
  counterProducts: number = 0;
  productsSelected: any;

  constructor(private productServices: ProductServiceService,
    public dialog: MatDialog) {
      this.productsSelected = [];
    this.getAllProductos();
   }

  ngOnInit(): void {
  }

  getAllProductos(){
    const getAllProducts = this.productServices.getProducts().subscribe(data => {
      if(data.code == '1'){
        this.products = data.description;
      }
      getAllProducts.unsubscribe();
    });
  }

  addProducts(product: any){
    this.products.forEach((element: any) => {
      if(element.productId == product.productId){
        element.productStock = element.productStock - 1;
      }
    });
    let isProduct = false;
    if(this.productsSelected.length > 0){
      this.productsSelected.forEach((element: any) => {
        if(element.productId == product.productId){
          isProduct = true;
          element.productAmount = element.productAmount + 1;
        }
      });
    }
    if(!isProduct){
      let json = {
        productId: product.productId,
        productName: product.producName,
        productPrice: product.productPrice,
        productAmount: 1
      };
      this.productsSelected.push(json);
    }
    this.counterProducts++;
  }

  modalShoppingCarr() {
    let dialogRef = this.dialog.open(ShoppingCarrComponent, {
      data: {productsSend: this.productsSelected},
      closeOnNavigation: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAllProductos();
    });
  }

}
