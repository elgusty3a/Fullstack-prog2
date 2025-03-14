/**
 * Actividad OBLIGATORIA ENTREGABLE (fecha maxima de entrega miercoles 19 de marzo)
 * Crear una clase Auto con atributos (marca, modelo, anio).
 * Agregar métodos (constructor(), acelerar(), frenar()).
 * Instanciar objetos y probar métodos.
 */

import { Auto } from "./Auto";

let logan = new Auto("Renault","Logan",2017);
let corolla = new Auto("Toyota","Corolla",2020);

logan.acelerar(logan.getModelo());

corolla.frenar(corolla.getModelo());

