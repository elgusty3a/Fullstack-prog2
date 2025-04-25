import { Perro } from "./Perro";
import { Gato } from "./Gato";

let mimu = new Gato("Mimu");
let chizzo = new Perro("Chizzo");

mimu.moverse();
mimu.emitirSonido();
mimu.tipoDeDieta();
console.log("---------------------------------------");
chizzo.moverse();
chizzo.emitirSonido();
chizzo.tipoDeDieta();
