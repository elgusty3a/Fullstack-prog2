//4cf50017dbf46f5b4ae8e9c41a89bded token para https://superheroapi.com/

let conteinerPpal = document.getElementById('conteinerPpal');
let cards = document.getElementById('cards');
let divImage = document.getElementById('divImage');
let divInfo = document.getElementById('divInfo');

let inputName = document.getElementById('nameCharacter');
let searchByName = document.getElementById('btnName');
let inputId = document.getElementById('idCharacter');
let searchById = document.getElementById('btnId');

searchByName.addEventListener("click", searchNameAPI);
searchById.addEventListener("click", getId);

let arrayCharacter = [];
getAll();

function getAll() {
  for (let i = 1; i <= 731; i++) {
    searchIdApi(i).then(data => {
      arrayCharacter.push(data);
    });
  }
}
// console.log(arrayCharacter[0].name); //TODO vaya a saber Dios por que no me muestra nada!!!

console.log(arrayCharacter);

function getId() {
  let id = inputId.value;
  searchIdApi(id).then(data => {
    printDataId(data);
  });
  inputId.value = "";
}

async function searchIdApi(id) {
  try {
    // console.log(id);
    if (id !== ""){
      let idToSearch = await fetch(`https://www.superheroapi.com/api.php/4cf50017dbf46f5b4ae8e9c41a89bded/${id}`);
      // console.log(idToSearch);
      let data = await idToSearch.json();
      // console.log(data);
      return data;
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
  let divCard = document.createElement("div");
  divCard.classList.add("card");
  cards.appendChild(divCard);
  let divImage = document.createElement("div");
  divImage.classList.add("divImage");
  divCard.appendChild(divImage);
  let divInfo = document.createElement("div");
  divInfo.classList.add("divInfo");
  divCard.appendChild(divInfo);
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


