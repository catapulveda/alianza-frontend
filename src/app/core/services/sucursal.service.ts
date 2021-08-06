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

  insert(sucursal: Sucursal): Observable<Sucursal> {
    return this.httpClient.post<Sucursal>('http://localhost:1234/sucursales', sucursal);
  }

  findById(sucursalId: number): Observable<Sucursal> {
    return this.httpClient.get<Sucursal>( `http://localhost:1234/sucursales/${sucursalId}`);
  }

  update(sucursalId: number, sucursal: Sucursal) {
    return this.httpClient.put(`http://localhost:1234/sucursales/${sucursalId}`, sucursal);
  }

  delete(sucursalId: number): Observable<void> {
    return this.httpClient.delete<void>(`http://localhost:1234/sucursales/${sucursalId}`);
  }

}
