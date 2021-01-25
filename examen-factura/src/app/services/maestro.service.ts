import { Factura } from './../interfaces/factura';
import { Maestro } from './../interfaces/maestro';
import { MAESTROS } from './../mocks-app/mock-maestro';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'

})
export class MaestroService {

  maestro : Maestro[];

  constructor() { }
  getFacturas(): Factura[] {
    this.maestro = MAESTROS;
    return this.maestro[0].factura;
  }
}
