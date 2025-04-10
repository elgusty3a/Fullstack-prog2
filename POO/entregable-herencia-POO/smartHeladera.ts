import { Heladera } from "./heladera";
import { ModuloWifi } from "./moduloWifi";

export class SmartHeladera extends Heladera {

  private moduloWifi:ModuloWifi;

  constructor(pMarca:string,pModelo:string,pEstaEncendido:boolean,pTemperatura:number,pModulo:ModuloWifi) {
    super(pMarca,pModelo,pEstaEncendido,pTemperatura);
    this.moduloWifi = pModulo;
  }

  public conectarInternet():void{
    this.moduloWifi.conectarInternet();
  }

  public mostrarInfo():void{
    super.mostrarInfo();
    this.moduloWifi.mostrarInfo();
  }


}