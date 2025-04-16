"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Persona_1 = require("./Persona");
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno(pApellido, pNombre, pDni, pCurso) {
        var _this = _super.call(this, pApellido, pNombre, pDni) || this;
        _this.nota = 0;
        _this.curso = pCurso;
        return _this;
    }
    Alumno.prototype.getNota = function () {
        return this.nota;
    };
    Alumno.prototype.setNota = function (pNota) {
        this.nota = pNota;
    };
    Alumno.prototype.getCurso = function () {
        return this.curso;
    };
    Alumno.prototype.setCurso = function (pAsignatura) {
        this.curso = pAsignatura;
    };
    Alumno.prototype.mostrarInfo = function () {
        _super.prototype.mostrarInfo.call(this);
        console.log("Cursando: ".concat(this.curso.getAsignatura()));
    };
    return Alumno;
}(Persona_1.Persona));
exports.Alumno = Alumno;
