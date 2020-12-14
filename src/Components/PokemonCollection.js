import React from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

export default function PokemonCollection({ allPokemons }) {
    return(
        <Card.Group itemsPerRow={6}>
            <h1>Hello From Pokemon Collection</h1>
            {allPokemons && allPokemons.map((pokemon, index) =>
                <PokemonCard
                    key={index}
                    pokemon={pokemon}
                />)
            }
        </Card.Group>
    )
}