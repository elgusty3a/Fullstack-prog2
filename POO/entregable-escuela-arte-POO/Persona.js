"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(pNombre, pApellido, pDni) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.dni = pDni;
    }
    Persona.prototype.getApellido = function () {
        return this.apellido;
    };
    Persona.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Persona.prototype.getDni = function () {
        return this.dni;
    };
    Persona.prototype.setDni = function (pDni) {
        this.dni = pDni;
    };
    Persona.prototype.mostrarInfo = function () {
        console.log("\nApellido y nombre: ".concat(this.getApellido(), " ").concat(this.getNombre(), " \nDNI: ").concat(this.getDni()));
    };
    return Persona;
}());
exports.Persona = Persona;
