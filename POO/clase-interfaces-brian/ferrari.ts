import { Auto } from "./auto";

export class Ferrari extends Auto{


    public acelerar(): void {
        this.velocidadActual += 50;
        console.log("velocidad actual "+ this.velocidadActual);
    }

}