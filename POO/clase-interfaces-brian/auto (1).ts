export class Auto{

    protected marca:string;
    protected modelo:string;
    protected velocidadActual:number;

    constructor(pMarca:string,pModelo:string) {
        this.marca = pMarca;
        this.modelo=pModelo;
        this.velocidadActual=0;
    }

    public acelerar():void{
        this.velocidadActual +=10; 
        console.log("velocidad actual "+ this.velocidadActual);
    }
}