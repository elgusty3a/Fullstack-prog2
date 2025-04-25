import { Robot } from "./robot";

export class RobotPileta extends Robot{
    limpiar() {
       console.log("limpiando Pileta");
    }
    cargar() {
        console.log("cargando");
    }
    apagar():boolean{
        return false;
    }
}