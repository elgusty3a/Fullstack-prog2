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
    Curso.prototype.matricularAlumnos = function (pAlumnos) {
        var _this = this;
        pAlumnos.forEach(function (alumno) {
            _this.matricularAlumno(alumno);
        });
    };
    Curso.prototype.matricularAlumno = function (pAlumno) {
        if (!this.existeAlumno(pAlumno) && this.cursoCorrecto(pAlumno)) {
            // if (pAlumno.getCurso().getAsignatura() == this.getAsignatura()) {
            this.alumnosDe.push(pAlumno);
        }
    };
    Curso.prototype.contratarProfesor = function (pProfesor) {
        // if (!this.cursoActivo() && (this.asignatura == pProfesor.getCurso().getAsignatura())) { //TODO ver por que se repite el clg
        if (!this.cursoActivo() && this.cursoCorrecto(pProfesor)) { //TODO ver por que se repite el clg
            this.setProfesor(pProfesor);
        }
    };
    Curso.prototype.cursoCorrecto = function (pPersona) {
        return (this.asignatura == pPersona.getCurso().getAsignatura());
    };
    Curso.prototype.cursoActivo = function () {
        return !(this.profesor === undefined);
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
    Curso.prototype.existeProfesor = function (pProfesor) {
        return (this.profesor == pProfesor);
    };
    Curso.prototype.existeAlumno = function (pAlumno) {
        return this.alumnosDe.includes(pAlumno);
    };
    Curso.prototype.mostrarInfo = function () {
        console.log("Nombre del curso: ".concat(this.asignatura));
        if (this.cursoActivo()) {
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
