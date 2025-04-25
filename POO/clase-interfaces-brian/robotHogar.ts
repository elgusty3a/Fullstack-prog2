
import { Robot } from "./robot";

export class RobotHogar extends Robot {
    limpiar():string {
       return "limpiando habitaciones";
    }
    cargar():string {
       return  "enchufado a 220";
    }
}