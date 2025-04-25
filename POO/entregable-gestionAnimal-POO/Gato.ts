import { Animal } from "./Animal";

export class Gato extends Animal{

  constructor(pNombre:string){
    super(pNombre);
  }

  emitirSonido(): void {
    console.log("¡¡Miau!!");
  }
  tipoDeDieta(): void {
    console.log("Alimento balanceado y pescado");
  }

}