class Moto implements Vehiculo {
  private velocidadActual: number;
  private cilindrada: number;
  constructor(pCilindrada: number) {
    this.velocidadActual = 0;
    this.cilindrada = pCilindrada;
  }
  acelerar(): void {
    this.velocidadActual = + 10;
  }
  getVelocidadActual(): number {
    return this.velocidadActual;
  }
  esCiclomotor(): boolean {
    if (this.cilindrada > 50) {
        return false;
    } else {
        return true;
    }
  }
}