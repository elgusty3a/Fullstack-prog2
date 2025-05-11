import { AnimalFactory } from "./AnimalFactory";

let fabricaAnimales = new AnimalFactory();

let chizzo = fabricaAnimales.crearAnimal("perro",{nombre:"Chizzo",raza:"Callejero"});

console.log(chizzo.toString());
let arya = fabricaAnimales.crearAnimal("gato",{nombre: "Arya",raza: "carey"});
console.log(arya.toString());
let limon = fabricaAnimales.crearAnimal("pajaro",{nombre: "Limon",raza: "canario"});
console.log(limon.toString());
let ferdinand = fabricaAnimales.crearAnimal("toro",{nombre: "Ferdinand",raza: "hereford"});
console.log(ferdinand.toString());
