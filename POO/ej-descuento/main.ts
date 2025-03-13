import * as rdl from 'readline-sync';
let precio: number = rdl.questionFloat("Ingrese el precio al que quiera aplicar el descuento: ");
console.log(precio);
let descuento: number = 0.1;
console.log(descuento);
console.log(calcular(precio,descuento));
function calcular(precio:number,descuento:number) {
  let resultado:number = precio * (1 - descuento);
  return resultado;
}
