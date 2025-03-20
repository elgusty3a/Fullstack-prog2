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

  public getModelo(){
    return this.modelo;
  }
  public setModelo(pModelo:string){
    this.modelo = pModelo;
  }

  public getSistem(){
    return this.sistemaOperativo;
  }
  public setSistem(pSistem:string){
    this.sistemaOperativo = pSistem;
  }

  public getMemoriaRam(){
    return this.memoriaRam;
  }
  public setMemoriaRam(pRam:number){
    this.memoriaRam = pRam;
  }

  public getAlmacenamiento(){
    return this.memoriaRam;
  }
  public setAlmacenamiento(pAlmacenamiento:number){
    this.almacenamientoInterno = pAlmacenamiento;
  }

  public getEstado(){
    return this.estadoEncendido;
  }

  // Este metodo lo pense que si se ingresa true cambia el estado de encedido y apagado, nada mas, si se ingresa false es como si no apretara el boton del celular
  public encenderApagar(pEstado:boolean){
    if (pEstado == true){
      if (this.estadoEncendido == false) {
        this.estadoEncendido = true;
      }else{
        this.estadoEncendido = false;
      }
    }
  }

  // TODO ver si este metodo es mejor que el anterior
  // public encenderApagar(pEstado:boolean){
  //   if (pEstado != true) {
  //     this.estadoEncendido = true;
  //   } else {
  //     this.estadoEncendido = false;
  // }


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