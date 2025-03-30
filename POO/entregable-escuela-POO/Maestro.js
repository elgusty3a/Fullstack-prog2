"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maestro = void 0;
var Maestro = /** @class */ (function () {
    function Maestro(pApellido, pNombre, pGrado, pAlumnos) {
        this.apellido = pApellido;
        this.nombre = pNombre;
        this.grado = pGrado;
        this.alumnos = pAlumnos;
        // this.alumnos = new Array(); //TODO ver si se puede iniciar asi un arreglo vacio
    }
    Maestro.prototype.getApellido = function () {
        return this.apellido;
    };
    Maestro.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Maestro.prototype.getNombre = function () {
        return this.nombre;
    };
    Maestro.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Maestro.prototype.getGrado = function () {
        return this.grado;
    };
    Maestro.prototype.setGrado = function (pGrado) {
        this.grado = pGrado;
    };
    Maestro.prototype.getListaAlumnos = function () {
        console.log("Alumnos de ".concat(this.nombre, ":"));
        console.log("------");
        for (var _i = 0, _a = this.alumnos; _i < _a.length; _i++) {
            var alum = _a[_i];
            console.log("Nombre: ".concat(alum.getNombre()));
            console.log("------");
        }
    };
    Maestro.prototype.setAlumnos = function (pAlumnos) {
        this.alumnos = pAlumnos;
    };
    return Maestro;
}());
exports.Maestro = Maestro;
