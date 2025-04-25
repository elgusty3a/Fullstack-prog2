import { IAnimal } from "./IAnimal";

export abstract class Animal implements IAnimal{

  private nombre:string;

  constructor(pNombre:string){
    this.nombre = pNombre;
  }

  abstract tipoDeDieta():void;

  emitirSonido(): void{
  }

  moverse(): void {
    console.log(`${this.nombre} se mueve`);
  }

}