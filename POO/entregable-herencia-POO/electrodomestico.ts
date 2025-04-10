export class Electrodomestico {

  protected marca:string;
  protected modelo:string;
  protected estaEncendido:boolean;

  constructor(pMarca:string,pModelo:string,pEstaEncendido:boolean) {
    this.marca = pMarca;
    this.modelo = pModelo;
    this.estaEncendido = pEstaEncendido;
  }

  public getMarca():string{
    return this.marca;
  }

  public getModelo():string{
    return this.modelo;
  }

  public getEncendido():boolean{
    return this.estaEncendido;
  }

  public setMarca(pMarca:string):void{
    this.marca = pMarca;
  }

  public setModelo(pModelo:string):void{
    this.modelo = pModelo;
  }

  public encender():void{
    this.estaEncendido = true;
  }

  public apagar():void{
    this.estaEncendido = false;
  }

  public mostrarInfo():void{
    let condicion:string;
    if(this.getEncendido() == true) {
      condicion = "encendido";
    }else{ condicion = "apagado"}
    console.log(`Marca: ${this.getMarca()}\nModelo: ${this.getModelo()}\nEl electrodomestico esta ${condicion}`)
  }


}