import React from 'react';
import PokemonCollection from './PokemonCollection';
import PokemonForm from './PokemonForm';
import { Search } from 'semantic-ui-react'
import _ from 'lodash';

class PokemonIndex extends React.Component {
    state = {
        allPokemons: [],
        searchValue: ''
    }

componentDidMount() {
        const url = 'http://localhost:3000/pokemon';
        fetch(url)
        .then(response => response.json())
        .then(data =>this.setState({ allPokemons: data }))
        .catch(event => console.error(event))
}  


addPokemon = (pokemon) => {
    this.setState({ allPokemons: [pokemon, ...this.state.allPokemons] })
}

handleSearchChange = (e, { value }) => {
    this.setState({ searchTerm: value })
  }

render() {
    const filteredPokemons = this.state.allPokemons.filter(p => p.name.includes(this.state.searchTerm))
    return(
            <div>
                <h1>Pokemon Searcher</h1><br/>
                <Search onSearchChange={_.debounce(this.handleSearchChange, 500)} showNoResults={false} />

                <PokemonForm
                    addPokemon={this.addPokemon}
                />
                <PokemonCollection
                    allPokemons={filteredPokemons}
                />
            </div>
        )
    }
}

export default PokemonIndex;