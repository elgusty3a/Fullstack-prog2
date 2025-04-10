import { Telefono } from "./telefono";

export class TelefonoConCamara extends Telefono {


  constructor(pMarca:string,pEstaPrendido:boolean,pBateriaActual:number) {
    super(pMarca,pEstaPrendido,pBateriaActual);
  }

  public sacarFoto():void{
    if (this.getEstaPrendido()) {
      console.log("Sonrian.... Click");
    }else{
      console.log("El telefono esta apagado, no se puede sacar una foto");
    }
  }

}