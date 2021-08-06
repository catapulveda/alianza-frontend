import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from 'src/app/pages/usuario/usuario.component';
import { ListarSucursalComponent } from 'src/app/pages/sucursal/list/listar-sucursal.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EditSucursalComponent } from './pages/sucursal/edit/edit-sucursal.component';
import { CreateSucursalComponent } from './pages/sucursal/create/crear-sucursal.component';
import { CreateProductoComponent } from './pages/producto/create-producto/create-producto.component';
import { EditProductoComponent } from './pages/producto/edit-producto/edit-producto.component';
import { ListProductoComponent } from './pages/producto/list-producto/producto.component';
import { ConfirmDeleteComponent } from './shared/confirm-delete/confirm-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ListarSucursalComponent,
    ListProductoComponent,
    CreateSucursalComponent,
    EditSucursalComponent,
    CreateProductoComponent,
    EditProductoComponent,
    ConfirmDeleteComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatButtonModule,
        MatCardModule,
        MatListModule,
        MatIconModule,
        MatSelectModule,
        MatProgressBarModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        FormsModule,
        MatSnackBarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
