/**
 *? /EJERCICIO ENTREGABLE OBLIGATORIO - FECHA MAXIMA DE ENTREGA 26/03/2025
*TODO Se debe crear una clase Celular que represente un teléfono móvil.
** Requisitos:
*! Encapsulamiento: Los atributos deben ser privados y accesibles solo mediante getters y setters.
*! Constructor con parámetros opcionales y obligatorios:
  Obligatorios: Marca, modelo y sistema operativo.
  Opcionales: Memoria RAM (por defecto 4GB), almacenamiento interno (por defecto 64GB) y estado de encendido (por defecto apagado).
*! Métodos adicionales:
  encenderApagar(): Cambia el estado de encendido/apagado del celular.
  mostrarInfo(): Retorna una cadena con los datos del celular.
 */

import { Celular } from "./Celular";

let motorolaG32 = new Celular("Motorola","G32","Android",6,128,true);
let samsungA04 = new Celular("Samsung","A04","Android",4,64);
let tcl505 = new Celular("TCL","505","Android",undefined,undefined,true);
let iPhoneX6 = new Celular("IPhone","X6","IOS",8,undefined);

// motorolaG32.mostrarInfo();
// motorolaG32.setMarca("pepito");
// console.log(motorolaG32.getMarca());
// motorolaG32.mostrarInfo();

tcl505.mostrarInfo();
tcl505.encenderApagar(true);
tcl505.mostrarInfo();