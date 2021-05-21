import React, {Component} from 'react'

export default class Pet extends Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <p className="header">
            {this.props.pet.name} 
            {this.props.pet.gender === 'female' ? '♀' : '♂'} 
          </p>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age} {this.props.pet.age === 1 ? 'year' : 'years'}</p>
            <p>Weight: {this.props.pet.weight} {this.props.pet.weight === 1 ? 'lb.' : 'lbs.'} </p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button 
              className="ui primary button" 
              onClick={() => this.props.onAdoptPet(this.props.pet.id)}>Adopt pet</button>
          )}
        </div>
      </div>
    )
  }
}