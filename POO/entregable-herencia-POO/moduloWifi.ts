export class ModuloWifi {

  private velocidadMbps:number
  private frecuenciaGHz:number

  constructor(pVelocidadMbps:number,pFrecuenciaGHz:number) {
    this.velocidadMbps = pVelocidadMbps;
    this.frecuenciaGHz = pFrecuenciaGHz;
  }

  public conectarInternet():void{
    console.log("Conexión establecida");
  }

  public getVelocidad():number{
    return this.velocidadMbps;
  }

  public mostrarVelocidad():void{
    console.log(`La velocidad de conexión es ${this.getVelocidad()}`);
  }

  public setVelocidad(pVelocidadMbps:number){
    this.velocidadMbps = pVelocidadMbps;
  }

  public getFrecuencia():number{
    return this.frecuenciaGHz;
  }

  public setFrecuencia(pFrecuenciaGHz:number):void{
    this.frecuenciaGHz = pFrecuenciaGHz;
  }

  public mostrarInfo():void{
    console.log(`Velocidad de conexión: ${this.getVelocidad()}\nFrecuencia de conexión: ${this.getFrecuencia()}\n`);
  }

}