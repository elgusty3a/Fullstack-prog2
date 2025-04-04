import { Libro } from "./libro.ts";

export class Socio {

  private nombre:string;
  private apellido:string;
  private nroSocio:number;
  private libros:Libro[];

  constructor(pNombre:string,pApellido:string,pNro:number) {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.nroSocio = pNro;
    this.libros = new Array();
  }

  public getNombre() {
    return this.nombre;
  }

  public setNombre(pNombre:string) {
    this.nombre = pNombre;
  }

  public getApellido() {
    return this.apellido;
  }

  public setApellido(pApellido:string) {
    this.apellido = pApellido;
  }

  public getNroSocio() {
    return this.nroSocio;
  }

  public setNroSocio(pNro:number) {
    this.nroSocio = pNro;
  }

}