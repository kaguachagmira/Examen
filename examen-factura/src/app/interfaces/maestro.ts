import { Factura } from './factura';

export interface Maestro {
  id: number;
  factura: Factura[],
}
