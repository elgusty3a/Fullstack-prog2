import { Telefono } from "./telefono";

export class TelefonoConCamara extends Telefono {

  private bateriaMinParaFoto:number;


  constructor(pMarca:string,pEstaPrendido:boolean,pBateriaActual:number) {
    super(pMarca,pEstaPrendido,pBateriaActual);
    this.bateriaMinParaFoto = 5;
  }

  public sacarFoto():void{
    if (this.getEstaPrendido()) {
      if (super.getBateriaActual()>this.bateriaMinParaFoto) {
        console.log("Sonrian.... Click");
      }else{
        console.log(`No se puede abrir la camara, bateria baja`);
      }
    }else{
      console.log("El telefono esta apagado, no se puede sacar una foto");
    }
  }

}