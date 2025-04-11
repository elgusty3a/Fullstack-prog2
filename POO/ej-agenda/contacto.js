"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacto = void 0;
var Contacto = /** @class */ (function () {
    function Contacto(pNombre, pApellido, pNumberTelefono, pDireccion) {
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.numeroTelefono = pNumberTelefono;
        this.direccion = pDireccion;
    }
    Contacto.prototype.getNombre = function () {
        return this.nombre;
    };
    Contacto.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Contacto.prototype.getApellido = function () {
        return this.apellido;
    };
    Contacto.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Contacto.prototype.getNumeroTelefono = function () {
        return this.numeroTelefono;
    };
    Contacto.prototype.setNumeroTelefono = function (pNumberTelefono) {
        this.numeroTelefono = pNumberTelefono;
    };
    Contacto.prototype.getDireccion = function () {
        return this.direccion;
    };
    Contacto.prototype.setDireccion = function (pDireccion) {
        this.direccion = pDireccion;
    };
    return Contacto;
}());
exports.Contacto = Contacto;
