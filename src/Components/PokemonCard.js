import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';

const PokemonCard = ({ pokemon }) => {
    const { name, stats } = pokemon;
    const [flipped, setFlipped] = useState(true);
    const hpToDisplay = () => { return stats.find(stat => stat.name === 'hp').value };

    const toggleFlipped = () => { setFlipped(false)}; 

    const frontPokemon = pokemon.sprites.front;
    const backPokemon = pokemon.sprites.back;
    return(
        <Card>
            <div>
                <div 
                    onClick={() => toggleFlipped()} 
                    className="image"
                >
                    <img src={flipped === true ?  frontPokemon : backPokemon} alt="oh no!" />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                </div>
                <div className="extra content">
                    <span>
                    <i className="icon heartbeat red" />
                        HP {hpToDisplay}
                    </span>
                </div>
            </div>
        </Card>
    )
}

export default PokemonCard;