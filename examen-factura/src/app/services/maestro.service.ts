import { Detalle } from './../interfaces/detalle';
import { Maestro } from './../interfaces/maestro';
import { MAESTROS } from './../mocks-app/mock-maestro';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'

})
export class MaestroService {

  Detalle
  maestro : Maestro[];
  constructor() { }
  getDetalles(): Detalle[] {
    this.maestro = MAESTROS;
    return this.maestro[0].detalle;
  }
}
