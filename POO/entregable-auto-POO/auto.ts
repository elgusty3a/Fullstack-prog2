export class Auto {

  private marca: string;
  private modelo: string;
  private anio: number;

  constructor(marca:string,modelo:string,anio:number) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }

  acelerar(){
    console.log(`Piso el acelerador del ${this.modelo}`);
  }

  frenar(){
    console.log(`Piso el freno del ${this.modelo}`);
  }

}