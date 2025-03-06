let divAllDivisas = document.getElementById('all-badges');
let btnAll = document.getElementById('btn-seeAll');

let userMoney = document.getElementById('user-money');
let userQuantity = document.getElementById('quantity');
let monedaDestino = document.getElementById('destino');
let btnCalc = document.getElementById('btn-calculo');
let divResultado = document.getElementById('resultado');

btnAll.addEventListener("click", printBadges);
btnCalc.addEventListener("click", calculo);

function calculo() {
  let miMoneda = userMoney.value;
  let cantidad = userQuantity.value;
  let destino = monedaDestino.value;
  pedirAPI(destino,miMoneda,cantidad);
};

function imprimirResultado(resultado) {
  console.log(resultado);
  let resultadoParrafo = document.createElement("p");
  resultadoParrafo.textContent = resultado;
  divResultado.appendChild(resultadoParrafo);
}

async function pedirAPI(destino,miMoneda,cantidad) {
  try {
    let traerMonedaBase = await fetch(`https://api.frankfurter.dev/v1/latest?base=${destino}`);
    let monedaBaseJson = await traerMonedaBase.json();
    console.log(monedaBaseJson);
    for(let elem in monedaBaseJson.rates){
      if (elem == miMoneda) {
        let resultado = parseFloat(cantidad) * parseFloat(monedaBaseJson.rates[elem]);
        imprimirResultado(resultado);
      }
    }
  } catch (error) {
    console.log("le erraste chango");
  }
}

async function printBadges() {
  try {
    let allMoney = await fetch('https://api.frankfurter.dev/v1/currencies');
    let dataJson = await allMoney.json();
    console.log(dataJson);
    printBadgesOl(dataJson);
  } catch (error) {
    console.log("El error es: " + error);
  }
}

function printBadgesOl(data) {
  let orderList = document.createElement("ol");
  divAllDivisas.appendChild(orderList);
  for (let badge in data) {
    let item = document.createElement("li");
    item.textContent = `${badge}: ${data[badge]}`;
    orderList.appendChild(item);
  }
}