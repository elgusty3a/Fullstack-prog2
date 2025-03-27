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

  public getNombre() {
    return this.nombre;
  }

  public aprobo():boolean {
    if (this.nota >= 7) {
      return true;
      console.log("APROBADO PAPA!!!!");
    } else {
      return false;
      console.log("ANDA A ESTUDIAR PIBE");
    }
  }


}