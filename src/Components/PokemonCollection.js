import React from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

export default function PokemonCollection({ allPokemons }) {
    return(
        <Card.Group itemsPerRow={5}>
            {allPokemons && allPokemons.map((pokemon, index) =>
                <PokemonCard
                    key={index}
                    pokemon={pokemon}
                />)
            }
        </Card.Group>
    )
}