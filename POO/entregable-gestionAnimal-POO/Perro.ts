import { Animal } from "./Animal";

export class Perro extends Animal{

  constructor(pNombre:string){
    super(pNombre);
  }

  emitirSonido(): void {
    console.log("¡¡Guau!!");
  }
  tipoDeDieta(): void {
    console.log("Alimento balanceado y huesos");
  }

}