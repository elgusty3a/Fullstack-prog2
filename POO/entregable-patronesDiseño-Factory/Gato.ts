import { IAnimal } from "./IAnimal";

export class Gato implements IAnimal{
  private nombre:string;
  private raza:string;

  constructor(pNombre:string,pRaza:string){
    this.nombre = pNombre;
    this.raza = pRaza;
  }

  hacerSonido(): void {
    console.log("¡¡Miau!!");
  }
  mover(): void {
    console.log("Camina suavemente");
  }
  toString():String{
    return (`Animal: Gato.\n\tNombre: ${this.nombre}\n\tRaza: ${this.raza}`)
  }

}