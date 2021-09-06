import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfiguradorCanal } from 'src/app/core/services/configuradorCanal';
import { LoginService } from 'src/app/services/services/login/login.service';
import { RegisterUserService } from 'src/app/services/services/register-user/register-user.service';
import { MyErrorStateMatcher } from 'src/app/services/utils/utils.services';
import { InicioComponent } from '../inicio.component';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  users: FormGroup;
  matcher = new MyErrorStateMatcher();
  inicio: InicioComponent;

  constructor(
    private dialog: MatDialog,
    private _configCanal: ConfiguradorCanal,
    private registerUserService: RegisterUserService,
    private loginService: LoginService,
    private router:Router) { 
    this.inicio = new InicioComponent(this.dialog, this._configCanal, loginService, router);
    this.users = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }
  getErrorMessage() {
    if (this.users.controls.email.hasError('required')) {
      return 'Campo obligatorio';
    }

    return this.users.controls.email.hasError('email') ? 'El correo no es valido' : '';
  }

  registUser(){
    if( this.users.controls.password.value == this.users.controls.confirmPassword.value){
      const json = {
        data: {
          'userName': this.users.controls.userName.value,
          'userEmail': this.users.controls.email.value,
          'password': this.users.controls.password.value
        }
      };
      const createUser = this.registerUserService.createUser(json).subscribe(data => {
        if(data.code == '1'){
          this.users.reset();
        }
        alert(data.message);
        createUser.unsubscribe();
      });
    }else {
      alert('Las contraseñas no coinciden');
    }
  }

  cancel(){
    this.inicio.dialog.closeAll();
  }

}
