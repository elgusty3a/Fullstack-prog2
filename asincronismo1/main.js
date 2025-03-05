//4cf50017dbf46f5b4ae8e9c41a89bded token para https://superheroapi.com/

let conteinerPpal = document.getElementById('conteinerPpal');
let cards = document.getElementById('cards');
// let divImage = document.getElementById('divImage');
// let divInfo = document.getElementById('divInfo');

let inputName = document.getElementById('nameCharacter');
let searchByName = document.getElementById('btnName');
let inputId = document.getElementById('idCharacter');
let searchById = document.getElementById('btnId');

searchByName.addEventListener("click", searchNameAPI);
searchById.addEventListener("click", searchIdApi);

async function searchIdApi() {
  try {
    let id = inputId.value;
    // console.log(id);
    if (id !== ""){
      let idToSearch = await fetch(`https://www.superheroapi.com/api.php/4cf50017dbf46f5b4ae8e9c41a89bded/${id}`);
      let data = await idToSearch.json();
      // console.log(data);
      inputId.value = "";
      printDataId(data);
      // return data;
    }
  } catch (error) {
    console.log("Error:" + error);
  }
};

async function searchNameAPI() {
  try {
    let nameHeroe = inputName.value;
    // console.log(nameHeroe);
    if (nameHeroe !== ""){
      let idToSearch = await fetch(`https://www.superheroapi.com/api.php/4cf50017dbf46f5b4ae8e9c41a89bded/search/${nameHeroe}`);
      let data = await idToSearch.json();
      console.log(data);
      inputName.value = "";
      printDataName(data);
      // return data;
    }
  } catch (error) {
    console.log("Error:" + error);
  }
};

function printDataName(data) {
  data.results.forEach(version => {
    printDataId(version);
  });
}


function printDataId(data) {
  console.log(data);
  let divImage = document.createElement("div");
  cards.appendChild(divImage);
  let divInfo = document.createElement("div");
  cards.appendChild(divInfo);
  let heroeImg = document.createElement("img");
  heroeImg.src = data.image.url;
  divImage.appendChild(heroeImg);
  let heroeName = document.createElement("h1");
  heroeName.textContent = data.name;
  divInfo.appendChild(heroeName);
  let heroeAlignment = document.createElement("h3");
  heroeAlignment.textContent = data.biography.alignment;
  divInfo.appendChild(heroeAlignment);
  let heroePowerstats = document.createElement("ul");
  divInfo.appendChild(heroePowerstats);
  let powerstats = data.powerstats;
  console.log(powerstats);
  for (let power in powerstats) {
    let item = document.createElement("li");
    item.textContent = `${power}: ${powerstats[power]}`;
    heroePowerstats.appendChild(item);
  }
}





