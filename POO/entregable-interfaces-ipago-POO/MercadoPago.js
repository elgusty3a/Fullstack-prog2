"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPago = void 0;
var MercadoPago = /** @class */ (function () {
    function MercadoPago(pAlias, pMonto) {
        this.aliasDestino = pAlias;
        this.monto = pMonto;
    }
    MercadoPago.prototype.procesarPago = function () {
        console.log("Se transferir\u00E1 ".concat(this.monto, " pesos al alias ").concat(this.aliasDestino.toUpperCase(), " "));
    };
    MercadoPago.prototype.cancelarPago = function () {
        console.log("El pago ha sido cancelado");
    };
    MercadoPago.prototype.generarRecibo = function () {
        console.log("Transferencia exitosa");
    };
    return MercadoPago;
}());
exports.MercadoPago = MercadoPago;
