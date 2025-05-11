export class Computadora{

  private procesador:string;
  private ram:number;
  private almacenamiento:number;
  private tarjetaGráfica:boolean;
  private sistemaOperativo:string;

  constructor(pProcesador:string,pRam:number,pAlmacenamiento:number,pTarjetaGrafica:boolean,pSistemaOperativo:string){
    this.procesador = pProcesador;
    this.ram = pRam;
    this.almacenamiento = pAlmacenamiento;
    this.tarjetaGráfica = pTarjetaGrafica;
    this.sistemaOperativo = pSistemaOperativo;
  }

  tieneGrafica():string{
    if (this.tarjetaGráfica == true) {
      return "Si"
    }else{
      return "No"
    }
  }

  toString():string{
    return (`Datos de la PC:\n\tProcesador: ${this.procesador}\n\tRAM: ${this.ram}\n\tAlmacenamiento: ${this.almacenamiento}\n\tTarjeta Grafica: ${this.tieneGrafica()}\n\tSistema Operativo: ${this.sistemaOperativo}`);
  }
}

