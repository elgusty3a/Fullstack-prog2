"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Socio = void 0;
var Socio = /** @class */ (function () {
    function Socio(pNombre, pApellido, pNro) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.nroSocio = pNro;
        this.libros = new Array();
    }
    Socio.prototype.getNombre = function () {
        return this.nombre;
    };
    Socio.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Socio.prototype.getApellido = function () {
        return this.apellido;
    };
    Socio.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Socio.prototype.getNroSocio = function () {
        return this.nroSocio;
    };
    Socio.prototype.setNroSocio = function (pNro) {
        this.nroSocio = pNro;
    };
    return Socio;
}());
exports.Socio = Socio;
