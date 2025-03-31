"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maestro = void 0;
var Maestro = /** @class */ (function () {
    function Maestro(pApellido, pNombre, pGrado, pEscuela) {
        this.apellido = pApellido;
        this.nombre = pNombre;
        this.grado = pGrado;
        this.escuela = pEscuela;
        this.alumnosDe = new Array();
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
    Maestro.prototype.getAlumnosDe = function () {
        return this.alumnosDe;
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
    // public setAlumnos(pAlumnos:Alumno[]) {
    //   pAlumnos.forEach(alumno => {
    //     this.setAlumno(alumno);
    //   });
    // }
    //agrega un alumno al final del arreglo
    Maestro.prototype.setAlumno = function (pAlumno) {
        if (pAlumno.getGrado() == this.getGrado()) {
            this.alumnosDe.push(pAlumno); //se agrega a lista de alumnos del maestro
            //     console.log(`Se asigna el alumno ${pAlumno.getNombre()} al curso de ${this.getGrado()} dictado por ${this.getNombre()}`);
            //     if (!this.escuela.existeAlumno(pAlumno)) {
            //       this.escuela.matricularAlumno(pAlumno); //se agrega a lista de alumnos de al istitucion
            //     }
            //   } else {
            //     console.log(`El alumno ${pAlumno.getNombre()} no cursa el grado ${this.getGrado()} dictado por ${this.getNombre()}`);
            //   }
            // }else{
            //   console.log(`El alumno ${pAlumno.getNombre()} ya pertenece a la institucion`);
        }
    };
    Maestro.prototype.expulsarAlumno = function (pAlumno) {
        var indice = this.alumnosDe.indexOf(pAlumno);
        this.alumnosDe.splice(indice, 1);
    };
    Maestro.prototype.existeAlumno = function (pAlumno) {
        return this.alumnosDe.includes(pAlumno);
    };
    return Maestro;
}());
exports.Maestro = Maestro;
