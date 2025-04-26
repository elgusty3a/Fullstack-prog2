"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TelevisorSmart_1 = require("./TelevisorSmart");
var LamparaInteligente_1 = require("./LamparaInteligente");
var AspiradoraRobot_1 = require("./AspiradoraRobot");
var ControlRemoto_1 = require("./ControlRemoto");
var aspiraBot = new AspiradoraRobot_1.AspiradoraRobot("LG", "LG001");
var luminBot = new LamparaInteligente_1.LamparaInteligente("LUMEN", "L010-bot");
var controlBot = new ControlRemoto_1.ControlRemoto("P-098");
var teleBot = new TelevisorSmart_1.TelevisorSmart("Phillips", "P-098-SM", controlBot);
var casa = [aspiraBot, luminBot, teleBot];
for (var _i = 0, casa_1 = casa; _i < casa_1.length; _i++) {
    var disp = casa_1[_i];
    disp.conectar();
    disp.funcionar();
    disp.mostrarInfo();
    disp.desconectar();
}
