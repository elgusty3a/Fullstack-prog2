"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
var Perro = /** @class */ (function () {
    function Perro(pNombre, pRaza) {
        this.nombre = pNombre;
        this.raza = pRaza;
    }
    Perro.prototype.hacerSonido = function () {
        console.log("¡¡Guau!!");
    };
    Perro.prototype.mover = function () {
        console.log("Camina y mueve la cola");
    };
    Perro.prototype.toString = function () {
        return ("Animal: Perro.\n\tNombre: ".concat(this.nombre, "\n\tRaza: ").concat(this.raza));
    };
    return Perro;
}());
exports.Perro = Perro;
