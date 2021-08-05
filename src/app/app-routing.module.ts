import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from 'src/app/pages/usuario/usuario.component';
import { ListarSucursalComponent } from 'src/app/pages/sucursal/listar/listar-sucursal.component';
import { ProductoComponent } from 'src/app/pages/producto/producto.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    component: UsuarioComponent
  },
  {
    path: 'sucursales',
    component: ListarSucursalComponent
  },
  {
    path: 'productos',
    component: ProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
