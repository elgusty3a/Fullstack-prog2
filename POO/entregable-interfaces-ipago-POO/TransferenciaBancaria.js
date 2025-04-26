"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferenciaBancaria = void 0;
var TransferenciaBancaria = /** @class */ (function () {
    function TransferenciaBancaria(pCbuDestino, pMonto) {
        this.cbuDestino = pCbuDestino;
        this.cbuOrigen = 2000031564855466;
        this.monto = pMonto;
    }
    TransferenciaBancaria.prototype.procesarPago = function () {
        console.log("Se transferir\u00E1 ".concat(this.monto, " pesos a la cuenta con CBU ").concat(this.cbuDestino, " desde la cuenta ").concat(this.cbuOrigen));
    };
    TransferenciaBancaria.prototype.cancelarPago = function () {
        console.log("El pago ha sido cancelado");
    };
    TransferenciaBancaria.prototype.generarRecibo = function () {
        console.log("Transferencia exitosa");
    };
    return TransferenciaBancaria;
}());
exports.TransferenciaBancaria = TransferenciaBancaria;
