"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    Auto.prototype.acelerar = function (coche) {
        console.log("Piso el acelerador del ".concat(coche));
    };
    Auto.prototype.frenar = function (coche) {
        console.log("Piso el freno del ".concat(coche));
    };
    Auto.prototype.getModelo = function () {
        return this.modelo;
    };
    return Auto;
}());
exports.Auto = Auto;
