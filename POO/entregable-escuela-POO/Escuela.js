"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(pNombre) {
        this.nombreInstitucion = pNombre;
        this.alumnos = new Array();
        this.maestros = new Array();
    }
    Escuela.prototype.getNombreInstitucion = function () {
        return this.nombreInstitucion;
    };
    Escuela.prototype.setNombreInstitucion = function (pNombre) {
        this.nombreInstitucion = pNombre;
    };
    Escuela.prototype.getListaAlumnos = function () {
        console.log("Alumnos de la institucion:");
        console.log("------");
        for (var _i = 0, _a = this.alumnos; _i < _a.length; _i++) {
            var alum = _a[_i];
            console.log("Apellido: ".concat(alum.getApellido(), " \nNombre: ").concat(alum.getNombre(), " \nGrado: ").concat(alum.getGrado(), " \nNota: ").concat(alum.getNota(), "\n"));
        }
        console.log("------");
    };
    Escuela.prototype.matricularAlumnos = function (pAlumnos) {
        var _this = this;
        pAlumnos.forEach(function (alumno) {
            _this.matricularAlumno(alumno);
        });
    };
    Escuela.prototype.matricularAlumno = function (pAlumno) {
        if (!this.alumnos.includes(pAlumno)) {
            this.alumnos.push(pAlumno);
            this.maestros.forEach(function (maestro) {
                if (!maestro.existeAlumno(pAlumno)) {
                    maestro.setAlumno(pAlumno);
                }
            });
        }
        else {
            console.log("El alumno ".concat(pAlumno.getNombre(), " ").concat(pAlumno.getApellido(), " ya est\u00E1 matriculado"));
        }
    };
    Escuela.prototype.expulsarAlumno = function (pAlumno) {
        var indice = this.alumnos.indexOf(pAlumno);
        this.alumnos.splice(indice, 1);
        this.maestros.forEach(function (maestro) {
            if (maestro.existeAlumno(pAlumno)) {
                maestro.expulsarAlumno(pAlumno);
            }
        });
    };
    Escuela.prototype.contratarMaestros = function (pMaestros) {
        var _this = this;
        pMaestros.forEach(function (maestro) {
            _this.contratarMaestro(maestro);
        });
    };
    Escuela.prototype.contratarMaestro = function (pMaestro) {
        if (!this.existeMaestro(pMaestro)) {
            this.maestros.push(pMaestro);
            this.alumnos.forEach(function (alumno) {
                pMaestro.setAlumno(alumno);
            });
        }
    };
    Escuela.prototype.despedirMaestro = function (pMaestro) {
        if (this.existeMaestro(pMaestro)) {
            var indice = this.maestros.indexOf(pMaestro);
            this.maestros.splice(indice, 1);
        }
        else {
            console.log("El maestro ".concat(pMaestro.getNombre(), " ").concat(pMaestro.getApellido(), " no pertenece a la institucion"));
        }
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
    Escuela.prototype.existeAlumno = function (pAlumno) {
        return this.alumnos.includes(pAlumno);
    };
    Escuela.prototype.existeMaestro = function (pMaestro) {
        return this.maestros.includes(pMaestro);
    };
    return Escuela;
}());
exports.Escuela = Escuela;
