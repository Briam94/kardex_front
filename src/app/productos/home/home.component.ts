import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Modules } from 'src/app/services/utils/utils.services';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  color = {
    background: '#333'
  };

  userName: any;

  datoService: any;
  showProducts: boolean = false;
  showShopping: boolean = false;

  constructor(private route: Router) {
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
        this.showShopping = true;
      break
    
      default:
        break;
    }
  }
}
