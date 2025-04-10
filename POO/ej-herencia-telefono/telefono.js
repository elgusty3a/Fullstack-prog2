"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(pMarca, pEstaPrendido, pBateriaActual) {
        this.marca = pMarca;
        this.estaPrendido = pEstaPrendido;
        this.bateriaActual = pBateriaActual;
    }
    Telefono.prototype.getMarca = function () {
        return this.marca;
    };
    Telefono.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Telefono.prototype.getBateriaActual = function () {
        return this.bateriaActual;
    };
    Telefono.prototype.setBateriaActual = function (pBateriaActual) {
        this.bateriaActual = pBateriaActual;
    };
    Telefono.prototype.encenderApagar = function () {
        if (this.getEstaPrendido() == true) {
            console.log("El movil se apagará\n");
            this.estaPrendido = false;
        }
        else {
            console.log("Iniciando el movil\n");
            this.estaPrendido = true;
        }
    };
    Telefono.prototype.getEstaPrendido = function () {
        return this.estaPrendido;
    };
    Telefono.prototype.mandarMensaje = function (pMensaje) {
        if (this.getEstaPrendido()) {
            console.log("Enviando...\n".concat(pMensaje));
        }
        else {
            console.log("El telefono esta apagado, no se puede enviar un mensaje");
        }
    };
    Telefono.prototype.hacerLlamada = function (pNumero) {
        if (this.getEstaPrendido()) {
            console.log("Llamando al ".concat(pNumero));
        }
        else {
            console.log("Antes de llamar debes encender el telefono");
        }
    };
    return Telefono;
}());
exports.Telefono = Telefono;
