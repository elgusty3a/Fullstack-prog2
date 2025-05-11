import { ComputadoraBuilder } from "./ComputadoraBuilder";

let miPc = new ComputadoraBuilder().setAlmacenamiento(512).setProcesador("Ryzen 7").setRam(16).setTarjetaGráfica(true).build();

console.log(miPc.toString());