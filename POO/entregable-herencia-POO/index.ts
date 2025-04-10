import { SmartHeladera } from "./smartHeladera";
import { ModuloWifi } from "./moduloWifi";

let tpLink:ModuloWifi = new ModuloWifi(500,5.8);
let lg:SmartHeladera = new SmartHeladera("LG","GS66SPP",false,21,tpLink);
lg.encender();
lg.cambiarTemperatura(4);
lg.conectarInternet();
lg.mostrarInfo();