export class Persona{

  protected nombre:string;
  protected apellido:string;
  protected dni:number;

  constructor(pNombre:string,pApellido:string,pDni:number) {
    this.nombre = pNombre;
    this.apellido = pApellido;
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

  public mostrarInfo(): void{
    console.log(`\nApellido y nombre: ${this.getApellido()} ${this.getNombre()} \nDNI: ${this.getDni()}`);
  }

}