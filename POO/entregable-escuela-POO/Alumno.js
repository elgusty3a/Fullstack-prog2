"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(pApellido, pNombre, pGrado, pNota) {
        this.apellido = pApellido;
        this.nombre = pNombre;
        this.grado = pGrado;
        this.nota = pNota;
    }
    Alumno.prototype.getApellido = function () {
        return this.apellido;
    };
    Alumno.prototype.setApellido = function (pApellido) {
        this.apellido = pApellido;
    };
    Alumno.prototype.getNombre = function () {
        return this.nombre;
    };
    Alumno.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Alumno.prototype.getGrado = function () {
        return this.grado;
    };
    Alumno.prototype.setGrado = function (pGrado) {
        this.grado = pGrado;
    };
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.setNota = function (pNota) {
        this.nota = pNota;
    };
    Alumno.prototype.aprobo = function () {
        if (this.nota >= 7) {
            console.log("APROBADO PAPA!!!!");
            return true;
        }
        else {
            console.log("ANDA A ESTUDIAR PIBE");
            return false;
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
