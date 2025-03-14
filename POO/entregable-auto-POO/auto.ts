export class Auto {

  private marca: string;
  private modelo: string;
  private anio: number;

  constructor(marca:string,modelo:string,anio:number) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  acelerar(coche:string){
    console.log(`Piso el acelerador del ${coche}`);
  }

  frenar(coche:string){
    console.log(`Piso el freno del ${coche}`);
  }

  
  public getModelo() : string {
    return this.modelo;
  }


}