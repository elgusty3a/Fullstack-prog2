"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pajaro = void 0;
var Pajaro = /** @class */ (function () {
    function Pajaro(pNombre, pRaza) {
        this.nombre = pNombre;
        this.raza = pRaza;
    }
    Pajaro.prototype.hacerSonido = function () {
        console.log("¡¡Canta!!");
    };
    Pajaro.prototype.mover = function () {
        console.log("Vuela");
    };
    Pajaro.prototype.toString = function () {
        return ("Animal: Pajaro.\n\tNombre: ".concat(this.nombre, "\n\tRaza: ").concat(this.raza));
    };
    return Pajaro;
}());
exports.Pajaro = Pajaro;
