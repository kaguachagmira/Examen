import { DETALLES } from './../mocks-app/mock-detalle';
import { Factura } from './../interfaces/factura';
import { Detalle } from './../interfaces/detalle';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  detalles: Detalle[];
  detallesFactura = [];
  constructor() {

  }
  getDetalles(factura: Factura): Detalle[]{
    this.detalles = DETALLES;
    let j=0;
    let detallesFactura_1;
    for(let i=0; i<this.detalles.length-1;i++){
      if(factura.id==this.detalles[i].factura.id)
      {
        this.detallesFactura.push(this.detalles[i])
      }
    }
    return this.detallesFactura;

  }
}
