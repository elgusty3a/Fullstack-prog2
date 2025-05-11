import { IAnimal } from "./IAnimal";

export class Perro implements IAnimal{
  private nombre:string;
  private raza:string;

  constructor(pNombre:string,pRaza:string){
    this.nombre = pNombre;
    this.raza = pRaza;
  }

  hacerSonido(): void {
    console.log("¡¡Guau!!");
  }
  mover(): void {
    console.log("Camina y mueve la cola");
  }
  toString():String{
    return (`Animal: Perro.\n\tNombre: ${this.nombre}\n\tRaza: ${this.raza}`)
  }
}