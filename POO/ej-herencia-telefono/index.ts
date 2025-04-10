import { TelefonoConCamara } from "./telefonoConCamara";
import { TelefonoConRadio } from "./telefonoConRadio";

let motorola:TelefonoConCamara = new TelefonoConCamara("Motorola",false,100);
let samsung:TelefonoConCamara = new TelefonoConCamara("Motorola",true,5);
let nokia:TelefonoConRadio = new TelefonoConRadio("Nokia",true,84,97.3);
samsung.sacarFoto();
motorola.sacarFoto();
motorola.hacerLlamada(2983418803);
motorola.mandarMensaje("Hola, ya estoy yendo")
motorola.encenderApagar();
motorola.hacerLlamada(2983418803);
motorola.mandarMensaje("Hola, ya estoy yendo")
motorola.sacarFoto();
nokia.verFrecuenciaActual();
nokia.mandarMensaje("Hola mundo, si, somos re originales los informaticos")
nokia.hacerLlamada(29135468)
nokia.encenderApagar();
nokia.hacerLlamada(29135468)
nokia.mandarMensaje("Hola mundo, si, somos re originales los informaticos")
nokia.verFrecuenciaActual();