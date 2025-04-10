export class Contacto {

  private nombre:string;
  private apellido:string;
  private numeroTelefono:number;
  private direccion:string;

  constructor(pNombre:string,pApellido:string,pNumberTelefono:number,pDireccion:string) {
    this.nombre = pNombre;
    this.apellido = pApellido;
    this.numeroTelefono = pNumberTelefono;
    this.direccion = pDireccion;
  }

  public getNombre():string{
    return this.nombre;
  }
  public setNombre(pNombre:string) {
    this.nombre = pNombre;
  }
  public getApellido():string{
    return this.apellido;
  }
  public setApellido(pApellido:string) {
    this.apellido = pApellido;
  }
  public getNumeroTelefono():number{
    return this.numeroTelefono;
  }
  public setNumeroTelefono(pNumberTelefono:number) {
    this.numeroTelefono = pNumberTelefono;
  }
  public getDireccion():string{
    return this.direccion;
  }
  public setDireccion(pDireccion:string) {
    this.direccion = pDireccion;
  }

}