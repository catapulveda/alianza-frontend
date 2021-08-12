import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarSucursalComponent } from 'src/app/pages/sucursal/list/listar-sucursal.component';
import { ListProductoComponent } from 'src/app/pages/producto/list-producto/list-producto.component';
import { ListUsuarioComponent } from 'src/app/pages/usuario/list-usuario/list-usuario.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    component: ListUsuarioComponent
  },
  {
    path: 'sucursales',
    component: ListarSucursalComponent
  },
  {
    path: 'productos',
    component: ListProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
