let divAllDivisas = document.getElementById('all-badges');
let seeAllDivisas = document.getElementById('div-all-badges');
let btnAll = document.getElementById('btn-seeAll');

let userMoney = document.getElementById('user-money');
let userQuantity = document.getElementById('quantity');
let monedaDestino = document.getElementById('destino');
let btnCalc = document.getElementById('btn-calculo');
let divResultado = document.getElementById('resultado');
let selectMy = document.getElementById('monedaMy');
let selectBaseMoney = document.getElementById('monedaBaseSelect2');

btnAll.addEventListener("click", ()=>seeAllDivisas.classList.toggle("verMenos"));
btnCalc.addEventListener("click", calculo);

printSelect();

function calculo() {
  // let miMoneda = userMoney.value;
  let cantidad = userQuantity.value;
  // let destino = monedaDestino.value;
  let miMoneda2 = selectMy.value;
  let destino2 = selectBaseMoney.value;
  pedirAPI(destino2,miMoneda2,cantidad);
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

//------------------nuevo: selects------------------//

async function printSelect() {
  try {
    let allMoney = await fetch('https://api.frankfurter.dev/v1/currencies');
    let dataJson = await allMoney.json();
    console.log(dataJson);
    crearSelects1(dataJson);
    crearSelects2(dataJson);
    printBadgesOl(dataJson);
  } catch (error) {
    console.log("El error es: " + error);
  }
}

function crearSelects1(data) {
  for (let opc in data){
    let opcion = document.createElement('option');
    opcion.innerText = `${opc}`;
    // selectMy.appendChild(opcion);
    selectBaseMoney.appendChild(opcion);
  }
}
function crearSelects2(data) {
  for (let opc in data){
    let opcion = document.createElement('option');
    opcion.innerText = `${opc}`;
    selectMy.appendChild(opcion);
    // selectBaseMoney.appendChild(opcion);
  }
}
function printBadgesOl(data) {
  let orderList = document.createElement("ol");
  seeAllDivisas.appendChild(orderList);
  for (let badge in data) {
    let item = document.createElement("li");
    item.textContent = `${badge}: ${data[badge]}`;
    orderList.appendChild(item);
  }
}