import { IPago } from "./IPago";

export class MercadoPago implements IPago {
  private aliasDestino: string;
  private monto: number;

  constructor(pAlias: string, pMonto: number) {
    this.aliasDestino = pAlias;
    this.monto = pMonto;
  }

  procesarPago(): void {
    console.log(`Se transferirá ${this.monto} pesos al alias ${this.aliasDestino.toUpperCase()} `)
  }

  cancelarPago(): void {
    console.log("El pago ha sido cancelado")
  }

  generarRecibo(): void {
    console.log(`Transferencia exitosa`)
  }

}
