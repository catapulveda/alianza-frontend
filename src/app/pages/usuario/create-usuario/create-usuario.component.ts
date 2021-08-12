import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Sucursal } from 'src/app/interface/sucursal';
import { SucursalService } from '../../../core/services/sucursal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.scss']
})
export class CreateUsuarioComponent {

  miFormulario: FormGroup;

  misSucursales: Sucursal[] = [];

  misSucursales$: Observable<Sucursal[]> 

  constructor(
    private fb: FormBuilder,
    private sucursalService: SucursalService
  ) {

    this.miFormulario = this.fb.group({
      firstName: [],
      lastName: [],
      username: [],
      clave: [],
      sucursal: []
    });

    this.sucursalService.obtenerSucursales().subscribe(sucursales => {
      this.misSucursales = sucursales;
    });

    this.misSucursales$ = this.sucursalService.obtenerSucursales();
   }

}
