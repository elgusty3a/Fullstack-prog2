"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maestro = void 0;
var Maestro = /** @class */ (function () {
    function Maestro(pApellido, pNombre, pGrado, pAlumnos) {
        this.apellido = pApellido;
        this.nombre = pNombre;
        this.grado = pGrado;
        this.alumnosDe = pAlumnos;
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
    Maestro.prototype.getListaAlumnosDe = function () {
        console.log("Alumnos de ".concat(this.nombre, ":"));
        console.log("------");
        for (var _i = 0, _a = this.alumnosDe; _i < _a.length; _i++) {
            var alum = _a[_i];
            console.log("Apellido: ".concat(alum.getApellido(), " \nNombre: ").concat(alum.getNombre(), " \nGrado: ").concat(alum.getGrado(), " \nNota: ").concat(alum.getNota(), "\n"));
        }
        console.log("------");
    };
    //agrega un grupo de alumnos en forma de arreglo
    Maestro.prototype.setAlumnos = function (pAlumnos) {
        var _this = this;
        pAlumnos.forEach(function (alumno) {
            _this.setAlumno(alumno);
        });
    };
    //agrega un alumno al final del arreglo
    Maestro.prototype.setAlumno = function (pAlumno) {
        if (pAlumno.getGrado() == this.getGrado()) {
            this.alumnosDe.push(pAlumno);
        }
        else {
            console.log("El alumno ".concat(pAlumno.getNombre(), " no cursa el grado ").concat(this.getGrado()));
        }
    };
    return Maestro;
}());
exports.Maestro = Maestro;
