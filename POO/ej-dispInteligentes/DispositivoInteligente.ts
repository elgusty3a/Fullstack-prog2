import { IConectable } from "./IConectable";
export abstract class DispositivoInteligente implements IConectable{
  protected marca:string;
  protected modelo:string;
  constructor(pMarca: string, pModelo: string){
    this.marca = pMarca;
    this.modelo = pModelo;
  }
  mostrarInfo(): void{
    console.log(`Marca: ${this.marca}\nModelo: ${this.modelo}`);
  }

  abstract funcionar(): void;

  conectar(){
    console.log("Dispositivo conectado");
  }
  desconectar(){
    console.log("Dispositivo desconectado");
  }
}