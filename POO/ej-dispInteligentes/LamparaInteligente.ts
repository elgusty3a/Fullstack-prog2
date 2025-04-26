import { DispositivoInteligente } from "./DispositivoInteligente";
export class LamparaInteligente extends DispositivoInteligente{

  constructor(pMarca: string, pModelo: string){
    super(pMarca,pModelo)
  }

  funcionar(): void {
    console.log("Alumbrando");
  }

}