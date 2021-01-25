import { FacturaService } from './../../services/factura.service';
import { Factura } from './../../interfaces/factura';
import { MaestroService } from './../../services/maestro.service';
import { Detalle } from './../../interfaces/detalle';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-maestro',
  templateUrl: './maestro.component.html',
  styleUrls: ['./maestro.component.scss']
})
export class MaestroComponent implements OnInit {


  facturas: Factura[];
  detalles=[];
  facturaSeleccionada: Factura;
  constructor(private maestroService: MaestroService, private facturaService: FacturaService) {
   }

  ngOnInit(): void {
  }
  obtenerDetallesFactura(factura: Factura): void {
    this.facturaSeleccionada = factura;
    this.detalles = this.facturaService.getDetalles(factura);
    console.log(this.detalles);
  }
  getFacturas(): void {
    this.facturas = this.maestroService.getFacturas();
  }

}
