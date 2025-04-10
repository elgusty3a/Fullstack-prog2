import { Telefono } from "./telefono";

export class TelefonoConRadio extends Telefono {

  private frecuenciaActual:number

  constructor(pMarca:string,pEstaPrendido:boolean,pBateriaActual:number,pFrecuenciaActual:number) {
    super(pMarca,pEstaPrendido,pBateriaActual);
    this.frecuenciaActual = pFrecuenciaActual;
  }

  public getFrecuecia():number{
    return this.frecuenciaActual;
  }

  public cambiarFrecuencia(pFrecuencia:number):void{
    this.frecuenciaActual = pFrecuencia;
  }

  public verFrecuenciaActual():void{
    if (this.getEstaPrendido()) {
      console.log(`Frecuencia: ${this.getFrecuecia()}`);
    }else{
      console.log("El telefono esta apagado, no se puede ver la frecuencia");
    }
  }

}