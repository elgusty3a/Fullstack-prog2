"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispositivoInteligente = void 0;
var DispositivoInteligente = /** @class */ (function () {
    function DispositivoInteligente(pMarca, pModelo) {
        this.marca = pMarca;
        this.modelo = pModelo;
    }
    DispositivoInteligente.prototype.mostrarInfo = function () {
        console.log("Marca: ".concat(this.marca, "\nModelo: ").concat(this.modelo));
    };
    DispositivoInteligente.prototype.conectar = function () {
        console.log("Dispositivo conectado");
    };
    DispositivoInteligente.prototype.desconectar = function () {
        console.log("Dispositivo desconectado");
    };
    return DispositivoInteligente;
}());
exports.DispositivoInteligente = DispositivoInteligente;
