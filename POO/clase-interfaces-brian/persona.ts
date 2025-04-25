import { iPersona } from "./iPersona";
import { IPrueba } from "./iPrueba";

export class Persona implements iPersona , IPrueba {
    
    private nombre:string;
    private apellido:string;    
    
    setNombre(pNombre: string): void {
        this.nombre=pNombre;
    }
    setApellido(pApellido: string): void {
        this.apellido=pApellido    }
    getNombre(): string {
        return this.nombre;
    }
    getApellido(): string {
        return this.apellido
    }
    pruebaMultiplicidadInterfaces(): string {
        return "metodo de IPrueba";
    }
    
}