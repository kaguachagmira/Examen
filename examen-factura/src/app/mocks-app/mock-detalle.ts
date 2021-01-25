import { FACTURAS } from './mock-factura';
import { PRODUCTOS } from '../mocks-app/mock-producto';
import { Detalle } from './../interfaces/detalle';

export const DETALLES : Detalle[] = [
  //YO
  { id: 1, cantidad: 3, precio:24 , valorUnitario:8, producto: PRODUCTOS[0] , factura: FACTURAS[0] },
  { id: 2, cantidad: 1, precio:200 , valorUnitario:200, producto: PRODUCTOS[1] , factura:FACTURAS[0] },
  { id: 3, cantidad: 2, precio:150 , valorUnitario:75 , producto: PRODUCTOS[3], factura:FACTURAS[1] },
  //JUAN
  { id: 4, cantidad: 3, precio:60 , valorUnitario:20, producto:PRODUCTOS[2] , factura:FACTURAS[2] },
  { id: 5, cantidad: 2, precio:200 , valorUnitario:100, producto:PRODUCTOS[4] , factura:FACTURAS[2] },
  { id: 6, cantidad: 5, precio:50 , valorUnitario:10 , producto:PRODUCTOS[5] , factura:FACTURAS[3] },
  //PEDRO
  { id: 7, cantidad: 3, precio:24 , valorUnitario:8, producto:PRODUCTOS[0] , factura:FACTURAS[4] },
  { id: 8, cantidad: 1, precio:200 , valorUnitario:200, producto:PRODUCTOS[1] , factura:FACTURAS[4] },
  { id: 9, cantidad: 2, precio:150 , valorUnitario:75 , producto:PRODUCTOS[3] , factura:FACTURAS[5] },
];
