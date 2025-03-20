export class Celular {

  private marca:string;
  private modelo:string;
  private sistemaOperativo:string;
  private memoriaRam:number;
  private almacenamientoInterno:number;
  private estadoEncendido:boolean;

  constructor(pMarca:string,pModelo:string,pSistem:string,pRam?:number,pAlmacenamiento?:number,pEncendido?:boolean) {
    this.marca = pMarca;
    this.modelo = pModelo;
    this.sistemaOperativo = pSistem;
    this.memoriaRam = pRam ?? 4;
    this.almacenamientoInterno = pAlmacenamiento ?? 64;
    this.estadoEncendido = pEncendido ?? false;
  }

  public getMarca(){
    return this.marca;
  }

  public setMarca(pMarca:string){
    this.marca = pMarca;
  }

  public encenderApagar(pEstado:boolean){
    if (pEstado != true) {
      this.estadoEncendido = true;
    } else {
      this.estadoEncendido = false;
    }
  }

  public mostrarInfo(){
    console.log(`
                Marca: ${this.marca}
                Modelo: ${this.modelo}
                Sistema Operativo: ${this.sistemaOperativo}
                Memoria RAM: ${this.memoriaRam}
                Almacenamiento interno: ${this.almacenamientoInterno}
                Estado: ${this.estadoEncendido}
                `);
  }



}