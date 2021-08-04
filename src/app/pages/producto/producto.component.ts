import { AfterViewInit, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  miLista = [
    {
      nombreCarpeta: 'Recursos Humanos',
      date: '2021-26-01'
    },
    {
      nombreCarpeta: 'Contabilidad',
      date: '2021-26-01'
    },
    {
      nombreCarpeta: 'Ingeniería',
      date: '2021-26-01'
    },
    {
      nombreCarpeta: 'Gerencia',
      date: '2021-26-01'
    },
    {
      nombreCarpeta: 'Otros',
      date: '2021-26-01'
    },
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

  hacerAlgo(variable: number) {
    alert('HACIENDO ALGO ' + variable);
  }

}
