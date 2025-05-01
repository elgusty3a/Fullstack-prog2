interface SeAfina{
  afinar():void
}

abstract class Instrumento {
  protected nombre: string;
  protected tipo: string;
  constructor(pNombre: string,pTipo?: string) {
    this.nombre = pNombre;
    this.tipo = pTipo?? "indefinido";
  }
  getTipo(): string{
    return this.tipo
  }
  setTIpo(pTipo: string){
    this.tipo = pTipo;
  }
  abstract tocar(): void;
  toString(): string{
    return `Nombre: ${this.nombre}\nTipo: ${this.getTipo()}`
  };
}

class Flauta extends Instrumento{
  private material: string;
  constructor(pNombre: string,pMaterial: string, pTipo?: string){
    super(pNombre,pTipo);
    this.material = pMaterial;
  }
  tocar(): void {
    console.log("Soplando fuerte");
  }
}

class Piano extends Instrumento implements SeAfina{
  private cantTeclas: number;
  constructor(pNombre: string,pCantTeclas: number, pTipo?: string){
    super(pNombre,pTipo);
    this.cantTeclas = pCantTeclas;
  }
  getCantTeclas(): number{
    return this.cantTeclas;
  }
  setCantTeclas(pCantTeclas: number): void{
    this.cantTeclas = pCantTeclas;
  }
  tocar(): void {
    console.log("Presionando las teclas");
  }
  afinar(): void {
    console.log(`Ajustando las cuerdas`);;
  }
}

class Violin extends Instrumento implements SeAfina{
  private cantCuerdas: number;
  constructor(pNombre: string,pCantCuerdas: number, pTipo?: string){
    super(pNombre,pTipo);
    this.cantCuerdas = pCantCuerdas;
  }
  getCantCuerdas(): number{
    return this.cantCuerdas;
  }
  setCantCuerdas(pCantCuerdas: number): void{
    this.cantCuerdas = pCantCuerdas;
  }
  tocar(): void {
    console.log("Rasgando las cuerdas");
  }
  afinar(): void {
    console.log(`Ajustando las cuerdas`);;
  }
}

class Orquesta {
  private instrumentos: Instrumento[];
  constructor(pInstrumentos: Instrumento[]) {
    this.instrumentos = new Array();
  }
  ejecutarOrquesta(): void{
    for (const instrumento of this.instrumentos) {
      instrumento.tocar();
    }
  }
  getInstrumentos(): Instrumento[]{
    return this.instrumentos;
  }
  setInstrumento(pInstrumento: Instrumento): void{
    this.instrumentos.push(pInstrumento);
  }
}