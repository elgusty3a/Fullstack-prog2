"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(pAlumnos, pMaestros, pCupoAlumno, pCupoMaestro) {
        // TODO ver como hacer el costructor de la escuela y demas
        this.alumnos = pAlumnos;
        this.maestros = pMaestros;
        this.cupoAlumno = pCupoAlumno;
        this.cupoMaestro = pCupoMaestro; //TODO ver si se puede iniciar vacio
    }
    Escuela.prototype.getListaAlumnos = function () {
        console.log("Alumnos de la institucion:");
        console.log("------");
        for (var _i = 0, _a = this.alumnos; _i < _a.length; _i++) {
            var alum = _a[_i];
            console.log("Apellido: ".concat(alum.getApellido(), " \nNombre: ").concat(alum.getNombre(), " \nGrado: ").concat(alum.getGrado(), " \nNota: ").concat(alum.getNota(), "\n"));
        }
        console.log("------");
    };
    Escuela.prototype.matricularAlumno = function (pAlumno) {
        this.alumnos.push(pAlumno);
        // this.maestros.map(maestro)
    };
    Escuela.prototype.expulsarAlumno = function (pAlumno) {
        var indice = this.alumnos.indexOf(pAlumno);
        this.alumnos.splice(indice, 1);
    };
    Escuela.prototype.contratarMaestro = function (pMaestro) {
        this.maestros.push(pMaestro);
    };
    Escuela.prototype.despedirMaestro = function (pMaestro) {
        var indice = this.maestros.indexOf(pMaestro);
        this.maestros.splice(indice, 1);
    };
    Escuela.prototype.getListaMaestros = function () {
        console.log("Maestros de la institucion: ");
        console.log("------");
        for (var _i = 0, _a = this.maestros; _i < _a.length; _i++) {
            var maestro = _a[_i];
            console.log("Apellido: ".concat(maestro.getApellido(), " \nNombre: ").concat(maestro.getNombre(), " \nGrado: ").concat(maestro.getGrado(), " \n"));
        }
        console.log("------");
    };
    Escuela.prototype.getCupoAlumnos = function () {
        return this.cupoAlumno;
    };
    //TODO hacer set de los cupos
    Escuela.prototype.getCupoMaestros = function () {
        return this.cupoMaestro;
    };
    return Escuela;
}());
exports.Escuela = Escuela;
