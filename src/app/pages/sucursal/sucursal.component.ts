import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.scss']
})
export class SucursalComponent implements OnInit {

  elementos = ['OPCION 1', 'OPCION 2', 'OPCION 3'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
