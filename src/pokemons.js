// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons
const pokemonArray = [
    { name: "Charmander", type: ["Fire"] },
    { name: "Vulpix", type: ["Fire"] },
    { name: "Bulbasaur", type: ["Grass", "Poison"] },
    // Add more Pokémon objects as needed
  ];
  

  function getAllFirePokemons(pokemons) {
    return pokemons.filter(pokemon => pokemon.type.includes("Fire"));
  }
  
  const firePokemons = getAllFirePokemons(pokemonArray);

  console.log(firePokemons);

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

function shortestPokemon(pokemons) {
    // Ensure the input array is not empty
    if (pokemons.length === 0) {
      return "No Pokémon found";
    }
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

function candyAverage(pokemons) {
    
    const pokemonsWithCandy = pokemons.filter(pokemon => pokemon.candy_count !== undefined);
  
    if (pokemonsWithCandy.length === 0) {
      return "No candy data available";
    }
  
    const totalCandy = pokemonsWithCandy.reduce((sum, pokemon) => sum + pokemon.candy_count, 0);
  
    const averageCandy = totalCandy / pokemonsWithCandy.length;
  
    return Math.round(averageCandy * 100) / 100;
  }

// Iteration 4: images for the first 10 `Ground`  Pokemons

function getGroundPokeImg(pokemons) {
   
    const groundPokemons = pokemons.filter(pokemon => pokemon.type.includes("Ground"));

    const first10GroundPokemons = groundPokemons.slice(0, 10);
  
    
    const images = first10GroundPokemons.map(pokemon => pokemon.image);
  
    return images;
  }
  
 
  const pokemonArrays= [
    { name: "Sandslash", type: ["Ground"], image: "sandslash.jpg" },
    { name: "Nidoking", type: ["Poison", "Ground"], image: "nidoking.jpg" },
    { name: "Diglett", type: ["Ground"], image: "diglett.jpg" },
  
  ];
 
  const groundPokemonImages = getGroundPokeImg(pokemonArrays);
  
  console.log("Images for the first 10 Ground type Pokémon:", groundPokemonImages);
  
// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(pokemons) {

    const pikachuWeight = pokemons.find(pokemon => pokemon.name === "Pikachu")?.weight;
  
    if (pikachuWeight === undefined) {
      return "Pikachu not found in the dataset";
    }
  
    const heavyPokemons = pokemons.filter(pokemon => pokemon.weight > pikachuWeight);
  
    const names = heavyPokemons.map(pokemon => pokemon.name);
  
    return names;
  }
  

  const pokemonsArray = [
    { name: "Pikachu", weight: 6 },
    { name: "Snorlax", weight: 460 },
    { name: "Onix", weight: 210 },
  ];
  
  const heavyPokemons = getHeavyPokemons(pokemonsArray);
  
  console.log("Pokémon names heavier than Pikachu:", heavyPokemons);
  

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

function orderAlphabetically(pokemons) {
    
    const clonedPokemons = [...pokemons];
  
    clonedPokemons.sort((a, b) => a.name.localeCompare(b.name));
  
    const first20Names = clonedPokemons.slice(0, 20).map(pokemon => pokemon.name);
  
    return first20Names;
  }
 
  const pokemonArray2= [
    { name: "Pikachu", type: ["Electric"], weight: 6 },
    { name: "Charmander", type: ["Fire"], weight: 8 },
    { name: "Bulbasaur", type: ["Grass", "Poison"], weight: 6 },
    
  ];
  
  
  const alphabeticallyOrderedNames = orderAlphabetically(pokemonArray2);
  
  console.log("First 20 Pokémon names alphabetically ordered:", alphabeticallyOrderedNames);
  

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them 
function strongPokemons(pokemons) {

    const singleWeaknessPokemons = pokemons.filter(pokemon => pokemon.weaknesses.length === 1);
  
    const first15Names = singleWeaknessPokemons.slice(0, 15).map(pokemon => pokemon.name);
  
    return first15Names;
  }

  const pokemonArray3 = [
    { name: "Pikachu", weaknesses: ["Ground"] },
    { name: "Charmander", weaknesses: ["Water", "Rock"] },
    { name: "Bulbasaur", weaknesses: ["Fire", "Flying", "Ice", "Psychic"] },
    
  ];
  
  const strongPokemonNames = strongPokemons(pokemonArray3);
 
  console.log("First 15 Pokémon names with just one weakness:", strongPokemonNames);
  