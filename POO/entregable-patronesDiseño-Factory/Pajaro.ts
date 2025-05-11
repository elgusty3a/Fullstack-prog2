import { IAnimal } from "./IAnimal";

export class Pajaro implements IAnimal{
  private nombre:string;
  private raza:string;

  constructor(pNombre:string,pRaza:string){
    this.nombre = pNombre;
    this.raza = pRaza;
  }

  hacerSonido(): void {
    console.log("¡¡Canta!!");
  }
  mover(): void {
    console.log("Vuela");
  }
  toString():String{
    return (`Animal: Pajaro.\n\tNombre: ${this.nombre}\n\tRaza: ${this.raza}`)
  }

}