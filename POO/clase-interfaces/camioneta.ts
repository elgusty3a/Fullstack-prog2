class Camioneta implements Vehiculo {
  private velocidadActual: number;
  private litrosNafta: number;
  private capacidadCarga: number;
  private dobleTraccionActiva: boolean;

  constructor(pCapacidad:number) {
    this.capacidadCarga = pCapacidad;
      this.velocidadActual = 0;
      this.litrosNafta = 0;
      this.dobleTraccionActiva = false;
  }

  public getCapacidadCarga():number{
    return this.capacidadCarga;
  }
  public setCapacidadCarga(pCapacidad:number):void{
    this.capacidadCarga = pCapacidad;
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

  public activarDesactivarDobleTraccion():void{
    if (this.dobleTraccionActiva) {
      this.dobleTraccionActiva = false;
    } else { this.dobleTraccionActiva = true}
  }
}