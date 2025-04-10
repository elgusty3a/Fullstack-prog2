"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(pMarca, pModelo, pEstaEncendido) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.estaEncendido = pEstaEncendido;
    }
    Electrodomestico.prototype.getMarca = function () {
        return this.marca;
    };
    Electrodomestico.prototype.getModelo = function () {
        return this.modelo;
    };
    Electrodomestico.prototype.getEncendido = function () {
        return this.estaEncendido;
    };
    Electrodomestico.prototype.setMarca = function (pMarca) {
        this.marca = pMarca;
    };
    Electrodomestico.prototype.setModelo = function (pModelo) {
        this.modelo = pModelo;
    };
    Electrodomestico.prototype.encender = function () {
        this.estaEncendido = true;
    };
    Electrodomestico.prototype.apagar = function () {
        this.estaEncendido = false;
    };
    Electrodomestico.prototype.mostrarInfo = function () {
        var condicion;
        if (this.getEncendido() == true) {
            condicion = "encendido";
        }
        else {
            condicion = "apagado";
        }
        console.log("Marca: ".concat(this.getMarca(), "\nModelo: ").concat(this.getModelo(), "\nEl electrodomestico esta ").concat(condicion));
    };
    return Electrodomestico;
}());
exports.Electrodomestico = Electrodomestico;
