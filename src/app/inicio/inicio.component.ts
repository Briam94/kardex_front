import { HttpParams } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfiguradorCanal } from '../core/services/configuradorCanal';
import { LoginService } from '../services/services/login/login.service';
import { MyErrorStateMatcher, Url } from '../services/utils/utils.services';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { UsuarioComponent } from './usuario/usuario.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {

  datoService: any;
  login: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(
    public dialog: MatDialog,
    private _configCanal: ConfiguradorCanal,
    private loginService: LoginService,
    private router:Router
  ) {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
   }


  ngOnInit() {
  }


  modalLogin() {
    let dialogRef = this.dialog.open(IniciarSesionComponent, {
      closeOnNavigation: true
    });

    dialogRef.afterClosed().subscribe(result => {
      /* Función para ejecutar algo después de cerrar el modal */
    });
  }

  openRegistUser(){
    let dialogRef = this.dialog.open(UsuarioComponent, {
      closeOnNavigation: true
    })
    dialogRef.afterClosed().subscribe(result => {
      /* Función para ejecutar algo después de cerrar el modal */
    });
  }

  
  makeLogin(){
    const json = {
      data: {
        userEmail: this.login.controls.email.value,
        password: this.login.controls.password.value
      }
    };
    const createUser = this.loginService.login(json).subscribe(data => {
      if(data.code == '1'){
        sessionStorage.setItem('userName', data.description.userName);
        sessionStorage.setItem('userEmail', data.description.userEmail);
        sessionStorage.setItem('userId', data.description.userId);
        this.login.reset();
        this.router.navigate(['productos']);
      }else {
        alert(data.message)
      }
      createUser.unsubscribe();
    });
  }

  ngOnDestroy() {
    this.dialog.closeAll();
  }

}
