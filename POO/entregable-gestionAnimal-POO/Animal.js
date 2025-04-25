"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(pNombre) {
        this.nombre = pNombre;
    }
    Animal.prototype.emitirSonido = function () {
    };
    Animal.prototype.moverse = function () {
        console.log("".concat(this.nombre, " se mueve"));
    };
    return Animal;
}());
exports.Animal = Animal;
