"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalFactory = void 0;
var Perro_1 = require("./Perro");
var Pajaro_1 = require("./Pajaro");
var Gato_1 = require("./Gato");
var AnimalFactory = /** @class */ (function () {
    function AnimalFactory() {
    }
    AnimalFactory.prototype.crearAnimal = function (tipo, atributos) {
        if (tipo === "perro") {
            return new Perro_1.Perro(atributos.nombre, atributos.raza);
        }
        else if (tipo === "gato") {
            return new Gato_1.Gato(atributos.nombre, atributos.raza);
        }
        else if (tipo === "pajaro") {
            return new Pajaro_1.Pajaro(atributos.nombre, atributos.raza);
        }
        else {
            throw new Error("tipo de animal no soportado");
        }
    };
    return AnimalFactory;
}());
exports.AnimalFactory = AnimalFactory;
