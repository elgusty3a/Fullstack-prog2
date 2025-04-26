export class ControlRemoto{
  private modelo: string;
  constructor(pModelo: string){
    this.modelo = pModelo;
  }

  encender(): void {
    console.log("ON");
  }
  apagar(): void {
    console.log("OFF");
  }

}