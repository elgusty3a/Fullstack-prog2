import { Auto } from "./auto";
import { AutoABateria } from "./autoAbateria";
import { Ferrari } from "./ferrari";
import { Persona } from "./persona"; 
import { Robot } from "./robot";
import { RobotHogar } from "./robotHogar";
import { RobotPileta } from "./robotPileta";
/*
let autoDeCiudad:Auto = new Auto("Gol","Power");
let ferraritestarosa:Ferrari = new Ferrari("Ferrar","Testarosa");
let autoTesla:AutoABateria = new AutoABateria("Tesla","Modelo1");

autoDeCiudad.acelerar();
ferraritestarosa.acelerar();
autoTesla.acelerar();


let nuevaPersona :Persona = new Persona();
nuevaPersona.setApellido("Fernandez");
nuevaPersona.setNombre("Juan");
console.log(nuevaPersona.getApellido());
console.log(nuevaPersona.getNombre());
console.log(nuevaPersona.pruebaMultiplicidadInterfaces());*/


//let robotLimpieza:Robot = new Robot("sony",5);
let robotHogar:RobotHogar = new RobotHogar("sony",5);
console.log(robotHogar.getMarca());
console.log(robotHogar.limpiar())

let robotPileta:RobotPileta = new RobotPileta("samsung",15);
robotPileta.limpiar();
console.log(robotPileta.getMarca());
let auxiliar = robotPileta.apagar();
console.log("robot pileta apagando "+auxiliar);


