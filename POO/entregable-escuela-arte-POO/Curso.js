"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso(pAsignatura, pInstitucion) {
        this.asignatura = pAsignatura;
        this.institucion = pInstitucion;
        this.alumnosDe = new Array();
    }
    Curso.prototype.getAsignatura = function () {
        return this.asignatura;
    };
    Curso.prototype.setAsignatura = function (pAsignatura) {
        this.asignatura = pAsignatura;
    };
    Curso.prototype.getInstitucion = function () {
        return this.institucion;
    };
    Curso.prototype.setInstitucion = function (pInstitucion) {
        this.institucion = pInstitucion;
    };
    // Se fija si el profesor o el alumno que se quiere dar de alta esta en el curso correcto
    Curso.prototype.cursoCorrecto = function (pPersona) {
        return (this.asignatura == pPersona.getCurso().getAsignatura());
    };
    //--------------------------------------------------
    //------------------ PROFESORES --------------------
    //--------------------------------------------------
    Curso.prototype.getProfesor = function () {
        if (this.cursoActivo()) {
            return this.profesor;
        }
        else {
            console.log("El curso aun no dispone de un profesor");
        }
    };
    Curso.prototype.setProfesor = function (pProfesor) {
        this.profesor = pProfesor;
    };
    Curso.prototype.contratarProfesor = function (pProfesor) {
        if (!this.cursoActivo() && this.cursoCorrecto(pProfesor)) {
            this.setProfesor(pProfesor);
        }
    };
    Curso.prototype.despedirProfesor = function (pProfesor) {
        if (this.existeProfesor(pProfesor) && this.cursoCorrecto(pProfesor) && pProfesor == this.profesor) {
            this.setProfesor(null);
        }
    };
    Curso.prototype.existeProfesor = function (pProfesor) {
        return (this.profesor == pProfesor);
    };
    Curso.prototype.cursoActivo = function () {
        return !(this.profesor == null);
    };
    //--------------------------------------------------
    //------------------ ALUMNOS -----------------------
    //--------------------------------------------------
    Curso.prototype.matricularAlumnos = function (pAlumnos) {
        var _this = this;
        pAlumnos.forEach(function (alumno) {
            _this.matricularAlumno(alumno);
        });
    };
    Curso.prototype.matricularAlumno = function (pAlumno) {
        if (!this.existeAlumno(pAlumno) && this.cursoCorrecto(pAlumno)) {
            this.alumnosDe.push(pAlumno);
        }
    };
    Curso.prototype.getListaAlumnosDe = function () {
        console.log("\nAlumnos de ".concat(this.getAsignatura(), ":"));
        console.log("------");
        for (var _i = 0, _a = this.alumnosDe; _i < _a.length; _i++) {
            var alum = _a[_i];
            alum.mostrarInfo();
        }
        console.log("------");
    };
    // agrega un alumno al final del arreglo
    Curso.prototype.setAlumno = function (pAlumno) {
        if (!this.existeAlumno(pAlumno)) {
            this.alumnosDe.push(pAlumno); //se agrega a lista de alumnos del maestro
        }
    };
    Curso.prototype.expulsarAlumno = function (pAlumno) {
        if (this.existeAlumno(pAlumno)) {
            var indice = this.alumnosDe.indexOf(pAlumno);
            this.alumnosDe.splice(indice, 1);
        }
    };
    Curso.prototype.existeAlumno = function (pAlumno) {
        return this.alumnosDe.includes(pAlumno);
    };
    //--------------------------------------------------
    //------------------ INFO --------------------------
    //--------------------------------------------------
    Curso.prototype.mostrarInfo = function () {
        console.log("Nombre del curso: ".concat(this.asignatura));
        if (this.profesor != null) {
            this.profesor.mostrarInfo();
        }
        else {
            console.log("El curso aun no tiene profesor");
        }
        this.getListaAlumnosDe();
    };
    return Curso;
}());
exports.Curso = Curso;
