import React, {Component} from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

export default class App extends Component {
  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }

  fetchPets = () => {
    let baseURL = '/api/pets'

    if (this.state.filters.type !== 'all') {
      baseURL += `?type=${this.state.filters.type}`
    }

    fetch(baseURL)
    .then(resp => resp.json())
    .then(jsonPets => this.setState({ pets: jsonPets}))
  }
  
  handleChangeType = ({target: {value}}) => {       
    this.setState(prevState => {
      return {
        filters: {
          ...prevState.filters,
          type: value
      }}
    })
  }

  handleAdoptPet = petId => {
    const pets = this.state.pets.map(pet => (
      pet.id === petId ? {...pet, isAdopted: true} : pet
    ))
    
    this.setState({
      pets: pets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters 
                onChangeType={this.handleChangeType} 
                onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser 
                pets={this.state.pets} 
                onAdoptPet={this.handleAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}