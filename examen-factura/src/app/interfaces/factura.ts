import { Cliente } from './cliente';
export interface Factura {
  id: number,
  fechaEmision: string,
  numeroFactura: number,
  subtotal: number,
  iva: number,
  total: number
  cliente: Cliente
}
