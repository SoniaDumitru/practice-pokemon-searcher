import React, { useState, useEffect } from 'react';
import _ from'lodash';
import PokemonCollection from './PokemonCollection';

function PokemonIndex() {
const [allPokemons, setAllPokemons] = useState();

useEffect(() => {
        const url = 'http://localhost:3000/pokemon';
        fetch(url)
        .then(response => response.json())
        .then(data => setAllPokemons(data))
    },[]
)  

console.log(allPokemons)
return(
        <div>
            <PokemonCollection/>
        </div>
    )
}

export default PokemonIndex;