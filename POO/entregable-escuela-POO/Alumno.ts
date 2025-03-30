export class Alumno {

  private apellido:string;
  private nombre:string;
  private grado:string;
  private nota:number;

  constructor(pApellido:string,pNombre:string,pGrado:string,pNota:number) {
    this.apellido = pApellido;
    this.nombre = pNombre;
    this.grado = pGrado;
    this.nota = pNota;
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

  public getGrado() {
    return this.grado;
  }

  public setGrado(pGrado:string) {
    this.grado = pGrado;
  }

  public getNota() {
    return this.nota;
  }

  public setNota(pNota:number) {
    this.nota = pNota;
  }

  public aprobo():boolean {
    if (this.nota >= 7) {
      console.log("APROBADO PAPA!!!!");
      return true;
    } else {
      console.log("ANDA A ESTUDIAR PIBE");
      return false;
    }
  }


}