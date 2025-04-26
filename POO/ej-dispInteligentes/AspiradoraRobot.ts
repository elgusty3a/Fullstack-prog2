import { DispositivoInteligente } from "./DispositivoInteligente";
export class AspiradoraRobot extends DispositivoInteligente{

  constructor(pMarca: string, pModelo: string){
    super(pMarca,pModelo)
  }

  funcionar(): void {
    console.log("Aspirando el piso");
  }

}