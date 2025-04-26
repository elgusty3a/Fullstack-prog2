import { IPago } from "./IPago";
export class TarjetaDeCredito implements IPago {
  private cuotas: number;
  private entidad: string;
  private numeroDeTarjeta: number;

  constructor(pNumeroDeTarjeta: number) {
    this.cuotas = 12;
    this.entidad = "Visa";
    this.numeroDeTarjeta = pNumeroDeTarjeta;
  }

  procesarPago(): void {
    console.log(`La tarjeta numero : ${this.numeroDeTarjeta} pertenece a la entidad: ${this.entidad} y se puede pagar hasta ${this.cuotas} cuotas  `)
  }

  cancelarPago(): void {
    console.log("El pago ha sido cancelado")
  }

  generarRecibo(): void {
    console.log(`El pago de la tarjeta numero : ${this.numeroDeTarjeta} ha sido exitoso`)
  }

}
