import { Computadora } from "./Computadora";

export class ComputadoraBuilder{

  private procesador: string;
  private ram:number;
  private almacenamiento:number;
  private tarjetaGráfica:boolean = false;
  private sistemaOperativo:string = "Windows 11";


  public setProcesador(procesador: string): ComputadoraBuilder {
    this.procesador = procesador;
    return this;
  }

  public setRam(ram: number): ComputadoraBuilder {
    this.ram = ram;
    return this;
  }

  public setAlmacenamiento(almacenamiento: number): ComputadoraBuilder {
    this.almacenamiento = almacenamiento;
    return this;
  }

  public setTarjetaGráfica(tarjetaGráfica: boolean): ComputadoraBuilder {
    this.tarjetaGráfica = tarjetaGráfica;
    return this;
  }

  public setSistemaOperativo(sistemaOperativo: string): ComputadoraBuilder {
    this.sistemaOperativo = sistemaOperativo;
    return this;
  }

  build(): Computadora{
    return new Computadora(this.procesador,this.ram,this.almacenamiento,this.tarjetaGráfica,this.sistemaOperativo);
  }
}