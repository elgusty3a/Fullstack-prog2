"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
var Gato = /** @class */ (function () {
    function Gato(pNombre, pRaza) {
        this.nombre = pNombre;
        this.raza = pRaza;
    }
    Gato.prototype.hacerSonido = function () {
        console.log("¡¡Miau!!");
    };
    Gato.prototype.mover = function () {
        console.log("Camina suavemente");
    };
    Gato.prototype.toString = function () {
        return ("Animal: Gato.\n\tNombre: ".concat(this.nombre, "\n\tRaza: ").concat(this.raza));
    };
    return Gato;
}());
exports.Gato = Gato;
