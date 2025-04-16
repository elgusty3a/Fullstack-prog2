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
exports.Profesor = void 0;
var Persona_1 = require("./Persona");
var Profesor = /** @class */ (function (_super) {
    __extends(Profesor, _super);
    function Profesor(pApellido, pNombre, pDni, pCurso) {
        var _this = _super.call(this, pApellido, pNombre, pDni) || this;
        _this.curso = pCurso;
        _this.salario = 0;
        return _this;
    }
    Profesor.prototype.getApellido = function () {
        return _super.prototype.getApellido.call(this);
    };
    Profesor.prototype.setApellido = function (pApellido) {
        _super.prototype.setApellido.call(this, pApellido);
    };
    Profesor.prototype.getNombre = function () {
        return _super.prototype.getNombre.call(this);
    };
    Profesor.prototype.setNombre = function (pNombre) {
        _super.prototype.setNombre.call(this, pNombre);
    };
    Profesor.prototype.getDni = function () {
        return _super.prototype.getDni.call(this);
    };
    Profesor.prototype.setDni = function (pDni) {
        _super.prototype.setDni.call(this, pDni);
    };
    Profesor.prototype.getCurso = function () {
        return this.curso;
    };
    Profesor.prototype.setCurso = function (pAsignatura) {
        this.curso = pAsignatura;
    };
    Profesor.prototype.getSalario = function () {
        return this.salario;
    };
    Profesor.prototype.setSalario = function (pSalario) {
        this.salario = pSalario;
    };
    Profesor.prototype.mostrarInfo = function () {
        console.log("Titular de: ".concat(this.curso.getAsignatura(), ":"));
        _super.prototype.mostrarInfo.call(this);
    };
    return Profesor;
}(Persona_1.Persona));
exports.Profesor = Profesor;
