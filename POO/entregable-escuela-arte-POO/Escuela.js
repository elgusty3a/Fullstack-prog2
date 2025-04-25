"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(pNombre) {
        this.nombreInstitucion = pNombre;
        this.alumnos = new Array();
        this.profesores = new Array();
        this.cursos = new Array();
    }
    Escuela.prototype.getNombreInstitucion = function () {
        return this.nombreInstitucion;
    };
    Escuela.prototype.setNombreInstitucion = function (pNombre) {
        this.nombreInstitucion = pNombre;
    };
    //--------------------------------------------------
    //------------------ ALUMNOS -----------------------
    //--------------------------------------------------
    Escuela.prototype.getListaAlumnos = function () {
        console.log("Alumnos de la institucion:");
        console.log("------");
        for (var _i = 0, _a = this.alumnos; _i < _a.length; _i++) {
            var alum = _a[_i];
            alum.mostrarInfo();
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
        if (!this.existeAlumno(pAlumno)) {
            this.alumnos.push(pAlumno);
            this.cursos.forEach(function (curso) {
                curso.matricularAlumno(pAlumno);
            });
        }
        else {
            console.log("El alumno ".concat(pAlumno.getNombre(), " ").concat(pAlumno.getApellido(), " ya est\u00E1 matriculado"));
        }
    };
    Escuela.prototype.expulsarAlumno = function (pAlumno) {
        var indice = this.alumnos.indexOf(pAlumno);
        this.alumnos.splice(indice, 1);
        this.cursos.forEach(function (curso) {
            if (curso.existeAlumno(pAlumno)) {
                curso.expulsarAlumno(pAlumno);
            }
        });
    };
    Escuela.prototype.existeAlumno = function (pAlumno) {
        return this.alumnos.includes(pAlumno);
    };
    //--------------------------------------------------
    //------------------ PROFESORES --------------------
    //--------------------------------------------------
    Escuela.prototype.contratarProfesores = function (pProfesor) {
        var _this = this;
        pProfesor.forEach(function (maestro) {
            _this.contratarProfesor(maestro);
        });
    };
    Escuela.prototype.contratarProfesor = function (pProfesor) {
        if (!this.existeProfesor(pProfesor)) {
            this.profesores.push(pProfesor);
            this.cursos.forEach(function (curso) {
                curso.contratarProfesor(pProfesor);
            });
        }
        else {
            console.log("El profesor ".concat(pProfesor.getNombre(), " ").concat(pProfesor.getApellido(), " ya pertenece a la institucion"));
        }
    };
    Escuela.prototype.despedirProfesor = function (pProfesor) {
        if (this.existeProfesor(pProfesor)) {
            var indice = this.profesores.indexOf(pProfesor);
            this.profesores.splice(indice, 1);
            this.cursos.forEach(function (curso) {
                curso.despedirProfesor(pProfesor);
            });
        }
        else {
            console.log("El profesor ".concat(pProfesor.getNombre(), " ").concat(pProfesor.getApellido(), " no pertenece a la institucion"));
        }
    };
    Escuela.prototype.getProfesores = function () {
        console.log("Profesores de la institucion:");
        console.log("------");
        for (var _i = 0, _a = this.profesores; _i < _a.length; _i++) {
            var profe = _a[_i];
            profe.mostrarInfo();
        }
        console.log("------");
    };
    Escuela.prototype.existeProfesor = function (pProfesor) {
        return this.profesores.includes(pProfesor);
    };
    //--------------------------------------------------
    //------------------ CURSOS ------------------------
    //--------------------------------------------------
    Escuela.prototype.getCursos = function () {
        console.log("Cursos disponibles:");
        console.log("------");
        for (var _i = 0, _a = this.cursos; _i < _a.length; _i++) {
            var curso = _a[_i];
            console.log("Curso: ".concat(curso.getAsignatura(), " \n"));
        }
        console.log("------");
    };
    Escuela.prototype.altaCurso = function (pCurso) {
        if (!this.existeCurso(pCurso)) {
            this.cursos.push(pCurso);
        }
    };
    Escuela.prototype.bajaCurso = function (pCurso) {
        if (this.existeCurso(pCurso)) {
            var indice = this.cursos.indexOf(pCurso);
            this.cursos.splice(indice, 1);
        }
        else {
            console.log("El curso ".concat(pCurso.getAsignatura(), " no existe"));
        }
    };
    Escuela.prototype.existeCurso = function (pCurso) {
        return (this.cursos.includes(pCurso));
    };
    //--------------------------------------------------
    //------------------ INFO --------------------------
    //--------------------------------------------------
    Escuela.prototype.mostrarInfo = function () {
        console.log("Nombre de la instituci\u00F3n: ".concat(this.nombreInstitucion));
        this.getCursos();
        this.getProfesores();
        this.getListaAlumnos();
    };
    return Escuela;
}());
exports.Escuela = Escuela;
