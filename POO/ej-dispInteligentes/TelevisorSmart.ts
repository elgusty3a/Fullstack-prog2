import { DispositivoInteligente } from "./DispositivoInteligente";
import { ControlRemoto } from "./ControlRemoto";

export class TelevisorSmart extends DispositivoInteligente{
  protected controRemoto:ControlRemoto;

  constructor(pMarca: string, pModelo: string, pControl: ControlRemoto){
    super(pMarca,pModelo)
    this.controRemoto = pControl;
  }

  funcionar(): void {
    this.controRemoto.encender();
    console.log("Reproduciendo imagen");
  }

}