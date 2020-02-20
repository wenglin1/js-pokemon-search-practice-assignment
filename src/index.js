document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
// Pokemon Container //
  const pokemonContainer = document.querySelector('#pokemon-container')
  pokemonContainer.innerHTML = renderAllPokemon(POKEMON)
// Pokemon Search Form // 
  const pokemonSearchForm = document.querySelector('#pokemon-search-form')
// Eevent Listers//
  pokemonSearchForm.addEventListener('input', (event) => {
    const filterPokemon = POKEMON.filter(pokemon => pokemon.name.includes(event.target.value.toLowerCase()))
    const filterPokemonHTML = renderAllPokemon(filterPokemon)
    
    pokemonContainer.innerHTML = filterPokemonHTML
  })

  pokemonContainer.addEventListener('click', (event) => {
    if (event.target.dataset.action === 'flip') {
      const targetPoke = POKEMON.find(pokeObj => pokeObj.id == event.target.dataset.id)
      if (event.target.src === targetPoke.sprites.front) {
        event.target.src = targetPoke.sprites.back
      } else {
        event.target.src = targetPoke.sprites.front
      }
    }
  })

})






// -------------------------------------------------- //

// HELPER METHODS //
// renders all the pokemons//
function renderAllPokemon(pokemonArray) {
  return pokemonArray.map(renderSinglePokemon).join(' ')
}

// renders a single pokemon//
function renderSinglePokemon (pokemon) {
  return (
    `<div class="pokemon-card">
      <div class="pokemon-frame">
      <h1 class="center-text">${pokemon.name}</h1>
        <div class="pokemon-image">
      <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
    </div>
    </div>`)
}

// HTML LAYOUT //
// <div class="pokemon-card">
//   <div class="pokemon-frame">
//     <h1 class="center-text">charizard</h1>
//     <div class="pokemon-image">
//       <img data-id="7" data-action="flip" class="toggle-sprite" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png">
//     </div>
//   </div>
// </div> 