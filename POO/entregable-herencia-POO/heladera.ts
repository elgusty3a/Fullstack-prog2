import { Electrodomestico } from "./electrodomestico";

export class Heladera extends Electrodomestico{

  protected temperatura:number;

  constructor(pMarca:string,pModelo:string,pEstaEncendido:boolean,pTemperatura:number){
    super(pMarca,pModelo,pEstaEncendido);
    this.temperatura = pTemperatura;
  }

  public getTemperatura():number{
    return this.temperatura;
  }

  public cambiarTemperatura(nuevaTemp: number){
    this.temperatura = nuevaTemp;
  }

  public mostrarInfo(){
    super.mostrarInfo();
    console.log(`Temperatura: ${this.getTemperatura()}`);
  }


}