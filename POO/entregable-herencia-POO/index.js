"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var smartHeladera_1 = require("./smartHeladera");
var moduloWifi_1 = require("./moduloWifi");
var tpLink = new moduloWifi_1.ModuloWifi(500, 5.8);
var lg = new smartHeladera_1.SmartHeladera("LG", "GS66SPP", false, 21, tpLink);
lg.encender();
lg.cambiarTemperatura(4);
lg.conectarInternet();
lg.mostrarInfo();
