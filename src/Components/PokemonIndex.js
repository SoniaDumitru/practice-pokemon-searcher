import React, { useState, useEffect } from 'react';
import _ from'lodash';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';

function PokemonIndex() {
const [allPokemons, setAllPokemons] = useState();

useEffect(() => {
        const url = 'http://localhost:3000/pokemon';
        fetch(url)
        .then(response => response.json())
        .then(data => setAllPokemons(data))
    },[]
)  


const addPokemon = (pokemon) => {
    setAllPokemons([...allPokemons, pokemon])
}


return(
        <div>
            <h1>Pokemon Searcher</h1><br/>
            <PokemonForm
                addPokemon={addPokemon}
            />
            <PokemonCollection
                allPokemons={allPokemons}
            />
        </div>
    )
}

export default PokemonIndex;