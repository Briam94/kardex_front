import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { SaleServiceService } from 'src/app/services/services/sale/sale-service.service';
import { DialogData } from 'src/app/services/utils/utils.services';

@Component({
  selector: 'app-shopping-carr',
  templateUrl: './shopping-carr.component.html',
  styleUrls: ['./shopping-carr.component.css']
})
export class ShoppingCarrComponent implements OnInit {

  displayedColumns: string[] = ['name', 'amount', 'price', 'options'];
  dataSource: any;
  totalPrice = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private dialogRef: MatDialogRef<ShoppingCarrComponent>,
    private saleService: SaleServiceService
  ) {
    let price = 0;
    let amount = 0;
    data.productsSend.forEach((element: any) => {
      amount = amount + element.productAmount;
      price = price + element.productPrice;
    });
    this.totalPrice = amount * price;
    this.dataSource = new MatTableDataSource(data.productsSend);
  }

  ngOnInit(): void {
  }

  removeProduct(product: any){
    let products = this.dataSource.data;
    let position = products.indexOf(product)
    products.splice(position, 1);
    this.dataSource = new MatTableDataSource(products);
    if(products.length <= 0){
      this.dialogRef.close();
    }
  }

  closeModal(){
    this.dialogRef.close();
  }

  makeSale(){
    const user = sessionStorage.getItem('userId');
    let productsArray: any[] = [];
    this.dataSource.data.forEach((element: any) => {
      const price = element.productPrice * element.productAmount;
      const elementJson = {
        salesUser: user,
        salesProduct: element.productId,
        salesProductAmount: element.productAmount,
        salesPrice: price.toString()
      }
      productsArray.push(elementJson);
    });
    const json = {
      data: productsArray
    };
    const createSalet = this.saleService.createSale(json).subscribe(data => {
      alert(data.message);
      if(data.code == '1'){
        this.closeModal();
      }
      createSalet.unsubscribe();
    });
  }


}
