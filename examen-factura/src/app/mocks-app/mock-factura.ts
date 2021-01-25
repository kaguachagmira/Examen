import { Factura } from './../interfaces/factura';
import { CLIENTES } from './mock-cliente'
export const FACTURAS : Factura[] = [
  { id: 1, fechaEmision: '25/01/2021', numeroFactura:1, subtotal:120, iva:14, total:134, cliente: CLIENTES[0]},
  { id: 2, fechaEmision: '25/01/2021', numeroFactura:2, subtotal:120, iva:14, total:134, cliente: CLIENTES[0]},
  { id: 3, fechaEmision: '25/01/2021', numeroFactura:3, subtotal:120, iva:14, total:134, cliente: CLIENTES[1]},
  { id: 4, fechaEmision: '25/01/2021', numeroFactura:4, subtotal:120, iva:14, total:134, cliente: CLIENTES[1]},
  { id: 5, fechaEmision: '25/01/2021', numeroFactura:5, subtotal:120, iva:14, total:134, cliente: CLIENTES[2]},
  { id: 6, fechaEmision: '25/01/2021', numeroFactura:6, subtotal:120, iva:14, total:134, cliente: CLIENTES[2]},
];
