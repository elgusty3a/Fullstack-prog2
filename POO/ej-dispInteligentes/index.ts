import { DispositivoInteligente } from "./DispositivoInteligente";
import { TelevisorSmart } from "./TelevisorSmart";
import { LamparaInteligente } from "./LamparaInteligente";
import { AspiradoraRobot } from "./AspiradoraRobot";
import { ControlRemoto } from "./ControlRemoto";

let aspiraBot = new AspiradoraRobot("LG","LG001");
let luminBot = new LamparaInteligente("LUMEN","L010-bot");
let controlBot = new ControlRemoto("P-098");
let teleBot = new TelevisorSmart("Phillips","P-098-SM",controlBot);

let casa:DispositivoInteligente[] = [aspiraBot,luminBot,teleBot];

for (const disp of casa) {
  disp.conectar();
  disp.funcionar();
  disp.mostrarInfo();
  disp.desconectar();
}