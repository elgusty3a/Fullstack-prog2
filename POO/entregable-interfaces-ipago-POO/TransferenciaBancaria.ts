import { IPago } from "./IPago";

export class TransferenciaBancaria implements IPago {
  private cbuDestino: number;
  private cbuOrigen: number;
  private monto: number;

  constructor(pCbuDestino: number, pMonto: number) {
    this.cbuDestino = pCbuDestino;
    this.cbuOrigen = 2000031564855466;
    this.monto = pMonto;
  }

  procesarPago(): void {
    console.log(`Se transferirá ${this.monto} pesos a la cuenta con CBU ${this.cbuDestino} desde la cuenta ${this.cbuOrigen}`)
  }

  cancelarPago(): void {
    console.log("El pago ha sido cancelado")
  }

  generarRecibo(): void {
    console.log(`Transferencia exitosa`)
  }

}
