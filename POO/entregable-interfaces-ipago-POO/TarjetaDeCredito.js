"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarjetaDeCredito = void 0;
var TarjetaDeCredito = /** @class */ (function () {
    function TarjetaDeCredito(pNumeroDeTarjeta) {
        this.cuotas = 12;
        this.entidad = "Visa";
        this.numeroDeTarjeta = pNumeroDeTarjeta;
    }
    TarjetaDeCredito.prototype.procesarPago = function () {
        console.log("La tarjeta numero : ".concat(this.numeroDeTarjeta, " pertenece a la entidad: ").concat(this.entidad, " y se puede pagar hasta ").concat(this.cuotas, " cuotas  "));
    };
    TarjetaDeCredito.prototype.cancelarPago = function () {
        console.log("El pago ha sido cancelado");
    };
    TarjetaDeCredito.prototype.generarRecibo = function () {
        console.log("El pago de la tarjeta numero : ".concat(this.numeroDeTarjeta, " ha sido exitoso"));
    };
    return TarjetaDeCredito;
}());
exports.TarjetaDeCredito = TarjetaDeCredito;
