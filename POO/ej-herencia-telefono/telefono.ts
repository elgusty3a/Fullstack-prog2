export class Telefono {

  protected marca:string;
  protected estaPrendido:boolean;
  protected bateriaActual:number;

  constructor(pMarca:string,pEstaPrendido:boolean,pBateriaActual:number) {
    this.marca = pMarca;
    this.estaPrendido = pEstaPrendido;
    this.bateriaActual = pBateriaActual;
  }

  public getMarca():string {
    return this.marca;
  }
  public setMarca(pMarca:string):void {
    this.marca = pMarca;
  }
  public getBateriaActual():number {
    return this.bateriaActual;
  }
  public setBateriaActual(pBateriaActual:number):void {
    this.bateriaActual = pBateriaActual;
  }
  public encenderApagar():void{
    if (this.getEstaPrendido() == true) {
      console.log("El movil se apagará\n");
      this.estaPrendido = false;
    }else{
      console.log("Iniciando el movil\n");
      this.estaPrendido = true;
    }
  }
  public getEstaPrendido():boolean{
    return this.estaPrendido;
  }
  public mandarMensaje(pMensaje:string):void{
    if (this.getEstaPrendido()) {
      console.log(`Enviando...\n${pMensaje}`);
    }else{
      console.log("El telefono esta apagado, no se puede enviar un mensaje");
    }
  }
  public hacerLlamada(pNumero:number):void{
    if (this.getEstaPrendido()) {
      console.log(`Llamando al ${pNumero}`);
    }else{
      console.log("Antes de llamar debes encender el telefono");
    }
  }


}