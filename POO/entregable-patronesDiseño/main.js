"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComputadoraBuilder_1 = require("./ComputadoraBuilder");
var miPc = new ComputadoraBuilder_1.ComputadoraBuilder().setAlmacenamiento(512).setProcesador("Ryzen 7").setRam(16).setTarjetaGráfica(true).build();
console.log(miPc.toString());
