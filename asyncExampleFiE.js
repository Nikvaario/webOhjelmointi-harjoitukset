async function fetchData() {
    console.log("Starting async function.");
    try {
        console.log("Creating a fetch.");
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        console.log("Server responds:");
        console.log(response);
        
        if (response.ok) {
            console.log("Fetching data.");
            const response_data = await response.json();
            console.log("Data fetched.");
            console.log(response_data);
        } else {
            throw new Error(`HTTP-Error! Data was not fetched correctly: ${response.status}`);
        }
    } catch (error) {
        console.log(`Error while fetching: ${error}`);
    }   
}

async function createPokemonView() {
    let promise = await fetchData();
    const pokeDiv = document.querySelector("#pokeDiv");
    for (let pokemon of promise.results) {
        let pokeText = document.createElement("p");
        pokeText.textContent = pokemon.name;
        pokediv.appendChild(pokeText);
    }
}

console.log("Starting program.");
createView
console.log("Printing while waiting response");