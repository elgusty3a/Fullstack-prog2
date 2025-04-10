export class Electrodomestico {

  private marca:string;
  private modelo:string;
  private estaEncendido:boolean;

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

  public setMarca(pMarca:string){
    this.marca = pMarca;
  }

  public setModelo(pModelo:string){
    this.modelo = pModelo;
  }

  public encender(){
    this.estaEncendido = true;
  }

  public apagar(){
    this.estaEncendido = false;
  }

  public mostrarInfo(){
    let condicion:string;
    if(this.getEncendido() == true) {
      condicion = "encendido";
    }else{ condicion = "apagado"}
    console.log(`Marca: ${this.getMarca()}\nModelo: ${this.getModelo()}\nEl electrodomestico esta ${condicion}`)
  }


}