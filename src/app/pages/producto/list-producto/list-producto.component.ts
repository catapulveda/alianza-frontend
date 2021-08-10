import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProductoService } from 'src/app/core/services/producto.service';
import { Producto } from 'src/app/interface/producto';


@Component({
  selector: 'app-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.scss']
})
export class ListProductoComponent {

  displayedColumns: string[] = ['codigoProducto', 'nombreProducto', 'precio', 'actions'];
  dataSource = new MatTableDataSource(null);

  constructor(
    private productoService: ProductoService
  ) {
    this.listarProductos();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  listarProductos() {
    this.productoService.listarProductos().subscribe(productos => {
      this.dataSource = new MatTableDataSource(productos);
    });
  }

  edit(producto: Producto): void {
    alert(JSON.stringify(producto));
  }
  
  delete(): void {
    alert('DELETED');
  }

}
