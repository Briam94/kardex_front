
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { APP_ROUTES } from './../core/core.routing';
import { LayoutModule } from './../core/layout/layout.module';
import { InicioComponent } from './../inicio/inicio.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

/* Se cargará en cada módulo los componentes de Material que sean necesarios */
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { UsuarioComponent } from './usuario/usuario.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [
        APP_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        LayoutModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule
    ],
    exports: [
        InicioComponent,
        IniciarSesionComponent
    ],
    declarations: [
        InicioComponent,
        IniciarSesionComponent,
        UsuarioComponent,
    ],
    entryComponents: [
        IniciarSesionComponent
    ],
    providers: [],
})
export class InicioModule { }
