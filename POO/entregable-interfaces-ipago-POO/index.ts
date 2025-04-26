import { TarjetaDeCredito } from "./TarjetaDeCredito";
import { TransferenciaBancaria } from "./TransferenciaBancaria";
import { MercadoPago } from "./MercadoPago";

let visa = new TarjetaDeCredito(122345567889);
let palomaGatoAvena = new MercadoPago("paloma.gato.avena",2500);
let bip = new TransferenciaBancaria(200030055556,30000);

visa.cancelarPago();
visa.procesarPago();
visa.generarRecibo();
console.log("---------------------------------------");
palomaGatoAvena.cancelarPago();
palomaGatoAvena.procesarPago();
palomaGatoAvena.generarRecibo();
console.log("---------------------------------------");
bip.cancelarPago();
bip.procesarPago();
bip.generarRecibo();