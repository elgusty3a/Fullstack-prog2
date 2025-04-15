export class Persona{

  private apellido:string;
  private nombre:string;
  private dni:number;

  constructor(pApellido:string,pNombre:string,pDni:number) {
    this.apellido = pApellido;
    this.nombre = pNombre;
    this.dni = pDni;
  }

  public getApellido() {
    return this.apellido;
  }

  public setApellido(pApellido:string) {
    this.apellido = pApellido;
  }

  public getNombre() {
    return this.nombre;
  }

  public setNombre(pNombre:string) {
    this.nombre = pNombre;
  }

  public getDni() {
    return this.dni;
  }

  public setDni(pDni:number) {
    this.dni = pDni;
  }
}