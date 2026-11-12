async function fetchData(url) {
    console.log("Starting async function.");
    try {
        console.log("Creating a fetch.");
        const response = await fetch(url);
        console.log("Server responds:");
        console.log(response);
        
        if (response.ok) {
            console.log("Fetching data.");
            const response_data = await response.json();
            console.log("Data fetched.");
            console.log(response_data)
            return response_data;
        } else {
            throw new Error(`HTTP-Error! Data was not fetched correctly: ${response.status}`);
        }
    } catch (error) {
        console.log(`Error while fetching: ${error}`);
    }   
}

async function fetchPokemonInfo(evt, url){
    const pokemon = evt.target.getAttribute("id");
    const pokemonElement = document.querySelector(`#${pokemon}`);

    console.log(`Element ${pokemon} was clicked`);
    console.log(`Creatign a fetch of ${pokemon}`);
    let pokemonData = await fetchData(url);
    
    for (let type in pokemonData.types) {
        console.log(type.type.name)
        let typeText = document.createElement("p");
        typeText.innetText = `Type: ${type.type.name}`;
        pokemonElement.appendChild(typeText);
    }
}

async function createPokemonView() {
    let promise = await fetchData("https://pokeapi.co/api/v2/pokemon");
    const pokeDiv = document.querySelector("#pokeDiv");

    for (let pokemon of promise.results) {
        let pokeButton = document.createElement("p");
        const html = `<button type="button" id="${pokemon.name}">${pokemon.name}</button>`;
        pokeButton.innerHTML = html;

        pokeButton.addEventListener("click", (event) => fetchPokemonInfo(event, pokemon.url));

        pokeDiv.appendChild(pokeButton);
    }
}

console.log("Starting program.");
createPokemonView();
console.log("Printing while waiting response");
