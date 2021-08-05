import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SucursalService } from 'src/app/core/services/sucursal.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { CrearSucursalComponent } from 'src/app/pages/sucursal/crear/crear-sucursal.component';

@Component({
  selector: 'app-sucursal',
  templateUrl: './listar-sucursal.component.html',
  styleUrls: ['./listar-sucursal.component.scss'],
})
export class ListarSucursalComponent implements OnInit {
  displayedColumns: string[] = ['codigoSucursal', 'nombre', 'createdAt'];
  dataSource = new MatTableDataSource(null);

  constructor(
    private sucursalService: SucursalService,
    public matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sucursalService.obtenerSucursales().subscribe((sucursales) => {
      this.dataSource = new MatTableDataSource(sucursales);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  mostrarDialogo(): void {
    this.matDialog.open(CrearSucursalComponent, {
      width: '320px',
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}
