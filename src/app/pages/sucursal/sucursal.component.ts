import { Component, OnInit } from '@angular/core';
import { SucursalService } from 'src/app/core/services/sucursal.service';
import { Sucursal } from 'src/app/interface/sucursal';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.scss']
})
export class SucursalComponent implements OnInit {

  elementos = ['OPCION 1', 'OPCION 2', 'OPCION 3'];
  
  constructor(private sucursalService: SucursalService) { }

  ngOnInit(): void {
    this.sucursalService.obtenerSucursales().subscribe(sucursales => {
        console.log(sucursales);
      }
    );
  }

}
