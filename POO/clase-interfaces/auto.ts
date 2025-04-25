class Auto implements Vehiculo {
  private velocidadActual: number;
  private litrosNafta: number;
  constructor() {
    this.velocidadActual = 0;
    this.litrosNafta = 0;
  }
  acelerar(): void {
    this.velocidadActual += 50;
  }
  getVelocidadActual(): number {
    return this.velocidadActual;
  }
  cargarNafta(): void {
    this.litrosNafta += 10;
  }
}