import { iPersona } from "./iPersona";

export abstract class Robot  {

    protected marca:string;
    protected voltaje:number;

    constructor(pMarca:string,pVoltaje:number){
        this.marca=pMarca;
        this.voltaje=pVoltaje;
    }
  

    public getMarca():string{
        return this.marca;
    }

    public getVoltaje():number{
        return this.voltaje;
    }

    abstract limpiar();
    abstract cargar();
   
    
  

}