import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sucursal } from 'src/app/interface/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {

  constructor(private httpClient: HttpClient) { }

  obtenerSucursales(): Observable<Sucursal[]> {
    return this.httpClient.get<Sucursal[]>('http://localhost:1234/sucursales');
  }

}
