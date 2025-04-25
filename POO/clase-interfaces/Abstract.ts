abstract class Auto {
    private velocidadMaxima: number;
    private motor : number;
    private cantidadPuertas: number;
    private velocidadActual: number;

    constructor() {
        this.velocidadMaxima = 180;
        this.motor = 2.0;
        this.cantidadPuertas = 4;
        this.velocidadActual =0;
    }

    acelerar(): void {
        this.velocidadActual += 20;
    }

    abstract cargarCombustible(): void;

    getMotor():number{
        return this.motor;
    }

   
}

 class AutoAGas extends Auto {
    private combustible : string;

    constructor(pCombustible: string) {
        super();
        this.combustible = pCombustible;
    }

    getCombustible(): string {
        return this.combustible;
    }

    cargarCombustible(): void {
        console.log("Cargando " + this.combustible)
    }

}