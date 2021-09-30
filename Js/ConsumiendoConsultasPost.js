// para buscar el mombre del pokemon 
const pokeName = document.querySelector('[data-poke-name]');
// para la imagen del pokemon 
const pokeImg = document.querySelector('[data-poke-img]');

const pokeImgContainer = document.querySelector('[data-poke-img-container]');
// busca el pokemon 

const searchPokemon = event => {
    event.preventDefault();
    const { value } = event.target.pokemon;
    // ingresa el local host y direcion de la peticion get
    fetch(`http://localhost:5000/pokemon-informations`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ pokemon: value.toLowerCase() })
    })
    .then(data => data.json())
    .then(response => renderPokemonData(response))
    .catch(err => renderNotFound())
}

const renderPokemonData = data => {
    const info =  data.replies;

    pokeName.textContent = info[ordenDatos.nombre].content;
    pokeImg.setAttribute('src', info[ordenDatos.imagen].content);
    setCardColor();
    // obtengo los datos de peso del pokemon
    renderPokemonTypes(info[ordenDatos.peso].content);
    // obtengo los datos del tipo de pokemon
    renderPokemonpeso(info[ordenDatos.tipo].content);
    //obtengi los datos de la altura del pokemon
    renderPokemonAltura(info[ordenDatos.altura].content);
    //obtengi los datos de la experiencia del pokemon
    renderPokemonExpBase(info[ordenDatos.experiencia].content);
    //obtengo la informacion del pokemon
    renderPokemonInfo(info[ordenDatos.info].content);
   
}

const setCardColor = () => {
    pokeImg.style.background =  `radial-gradient(green 33%, grey 33%)`;
    pokeImg.style.backgroundSize = ' 10px 10px';
}
// renderisa el tipo de pokemon
const renderPokemonTypes = tipo => {
    pokeTypes.innerHTML = '';
    const typeTextElement = document.createElement("div");
    typeTextElement.style.color = "orange";
    typeTextElement.textContent = tipo;
    pokeTypes.appendChild(typeTextElement);
}
const pokeTypes = document.querySelector('[data-poke-types]');

// el peso 
const renderPokemonpeso = tipo => {
    pokePeso.innerHTML = '';
    const PesoTextElement = document.createElement("div");
    PesoTextElement.style.color = "orange";
    PesoTextElement.textContent = tipo;
    pokePeso.appendChild(PesoTextElement);
}
const pokePeso = document.querySelector('[data-poke-peso]');

// altura
const renderPokemonAltura = tipo => {
    pokeAltura.innerHTML = '';
    const AlturaTextElement = document.createElement("div");
    AlturaTextElement.style.color = "orange";
    AlturaTextElement.textContent = tipo;
    pokeAltura.appendChild(AlturaTextElement);
}
const pokeAltura = document.querySelector('[data-poke-altura]');
// experiencia base
const renderPokemonExpBase = tipo => {
    pokeExpBase.innerHTML = '';
    const ExpBaseTextElement = document.createElement("div");
    ExpBaseTextElement.style.color = "orange";
    ExpBaseTextElement.textContent = tipo;
    pokeExpBase.appendChild(ExpBaseTextElement);
}
const pokeExpBase = document.querySelector('[data-poke-ExpBase]');
// informacion
const renderPokemonInfo = tipo => {
    pokeInfo.innerHTML = '';
    const InfoTextElement = document.createElement("div");
    InfoTextElement.style.color = "orange";
    InfoTextElement.textContent = tipo;
    pokeInfo.appendChild(InfoTextElement);
}
const pokeInfo = document.querySelector('[data-poke-info]');

const ordenDatos = {
    nombre: 0,
    tipo: 1,
    altura: 2,
    peso: 3,
    experiencia: 4,
    info: 5,
    imagen: 6
}
