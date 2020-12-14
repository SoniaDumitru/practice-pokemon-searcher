import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonIndex extends React.Component {
  state = {
    allPokemons: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(allPokemons => this.setState({ allPokemons: allPokemons }))
      .catch(e => console.error(e))
  }

  handleSearchChange = (e, { value }) => {
    this.setState({ searchTerm: value })
  }

  addPokemon = pokemon => {
    this.setState({ allPokemons: [pokemon, ...this.state.allPokemons] })
  }

  render() {
    const desiredPokemon = this.state.allPokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <Search 
            onSearchChange={_.debounce(this.handleSearchChange, 500)} 
            showNoResults={false} 
        />
        <PokemonForm addPokemon={this.addPokemon} />
        <PokemonCollection pokemon={desiredPokemon} />
      </div>
    )
  }
}

export default PokemonIndex