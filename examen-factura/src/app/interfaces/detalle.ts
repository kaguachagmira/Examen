import { Factura } from './factura';
import { Producto } from './producto';
export interface Detalle {
  id: number,
  cantidad: number,
  precio: number,
  valorUnitario: number,
  producto: Producto,
  factura: Factura
}
