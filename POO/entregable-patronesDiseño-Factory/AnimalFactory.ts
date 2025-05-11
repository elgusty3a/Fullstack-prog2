import { IAnimal } from "./IAnimal";
import { Perro } from "./Perro";
import { Pajaro } from "./Pajaro";
import { Gato } from "./Gato";
import { error } from "console";

export class AnimalFactory {

  public crearAnimal(tipo:string,atributos:any):any{
    if(tipo === "perro"){
      return new Perro(atributos.nombre,atributos.raza);
    }else if(tipo==="gato"){
      return new Gato(atributos.nombre,atributos.raza);
    }else if(tipo==="pajaro"){
      return new Pajaro(atributos.nombre,atributos.raza);
    }else{
      throw new Error("tipo de animal no soportado");
    }
  }
}