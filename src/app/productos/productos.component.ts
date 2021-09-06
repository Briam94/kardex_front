import { Component, OnInit } from '@angular/core';
import { Modules } from '../services/utils/utils.services';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  userName: any;

  datoService: any;
  showProducts: boolean = false;
  showShopping: boolean = false;

  constructor() {
    this.userName = sessionStorage.getItem('userName');
   }

  ngOnInit() {
  }

  toogleShowOption(showComponent: any){
    switch (showComponent) {
      case Modules.products:
        this.showProducts = true;
        this.showShopping = false;
        break;
      case Modules.shopping:
        this.showProducts = false;
        this.showShopping = false;
      break
    
      default:
        break;
    }
  }
}
