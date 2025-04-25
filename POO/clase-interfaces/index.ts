interface Vehiculo {
    acelerar(): void;
    getVelocidadActual(): number;
}

class Auto implements Vehiculo {
    private velocidadActual: number;
    private litrosNafta: number;

    constructor() {
        this.velocidadActual = 0;
        this.litrosNafta = 0;
    }

    acelerar(): void {
        this.velocidadActual += 50;
    }

    getVelocidadActual(): number {
        return this.velocidadActual;
    }

    cargarNafta(): void {
        this.litrosNafta += 10;
    }

}


class Moto implements Vehiculo {
    private velocidadActual: number;
    private cilindrada: number;

    constructor(pCilindrada: number) {
        this.velocidadActual = 0;
        this.cilindrada = pCilindrada;

    }

    acelerar(): void {
        this.velocidadActual = + 10;
    }

    getVelocidadActual(): number {
        return this.velocidadActual;
    }

    esCiclomotor(): boolean {
        if (this.cilindrada > 50) {
            return false;
        } else {
            return true;
        }
    }
}