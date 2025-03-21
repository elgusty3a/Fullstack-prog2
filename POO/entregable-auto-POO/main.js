"use strict";
/**
 * Actividad OBLIGATORIA ENTREGABLE (fecha maxima de entrega miercoles 19 de marzo)
 * Crear una clase Auto con atributos (marca, modelo, anio).
 * Agregar métodos (constructor(), acelerar(), frenar()).
 * Instanciar objetos y probar métodos.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Auto_1 = require("./Auto");
var logan = new Auto_1.Auto("Renault", "Logan", 2017);
var corolla = new Auto_1.Auto("Toyota", "Corolla", 2020);
logan.acelerar(logan.getModelo());
corolla.frenar(corolla.getModelo());
