import React, { Component } from 'react';
import NewSpotShow from '../components/NewSpotShow';

class NewSpotFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotName: '',
      spotAddress: '',
      spotCity: '',
      spotState: '',
      spotBoatRamp: '',
      spotParking: '',
      spotDock: ''
    }
    // Bind
  }

  handleNewName(event) {
    let newName = event.target.value
    this.setState({spotName: newName})
  }

  handleNewAddress(event) {
    let newAddress = event.target.value
    this.setState({spotAddress: newAddress})
  }

  handleNewCity(event) {
    let newCity = event.target.value
    this.setState({spotCity: newCity})
  }

  handleNewState(event) {
    let newState = event.target.value
    this.setState({spotState: newState})
  }

  handleBoatRamp(event) {
    let newBoatRamp = event.target.value
    this.setState({spotBoatRamp: newBoatRamp})
  }

  handleParking(event) {
    let newParking = event.target.value
    this.setState({spotParking: newParking})
  }

  handleDock(event) {
    let newDock = event.target.value
    this.setState({spotDock: newDock})
  }

  handleSubmit(event) {
    event.preventDefault()
    let statefullName = this.state.spotName
    let statefullAddress = this.state.spotAddress
    let statefullCity = this.state.spotCity
    let statefullState = this.state.spotState
    let statefullRamp = this.state.spotBoatRamp
    let statefullParking = this.state.spotParking
    let statefullDock = this.state.spotDock

    let payLoad = {
      name: statefullName,
      address: statefullAddress,
      city: statefullCity,
      state: statefullState,
      boat_ramp: statefullRamp,
      parking: statefullParking,
      dock: statefullDock

    }
    this.props.addNewSpot(payLoad)
    this.handleClearForm(event)
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      spotName: '',
      spotAddress: '',
      spotCity: '',
      spotState: '',
      spotBoatRamp: '',
      spotParking: '',
      spotDock: ''
    });
  }

  render() {
    return(
      <div className="spots-container">
        <h2 className="spots-container-title"> Add another Fishing Spot!</h2>
          <form onSubmit={this.handleSubmit} className="new-spot-form callout">
          <label>Name</label>
            <div>
              <input
                label='Name'
                type='text'
                name='name'
                value={this.state}
              />
            </div>
            <NameField
              content={this.state.spotName}
              label="Spot Name: "
              name="spot-name"
              handleChange={this.handleBodyChange}
            />

            <div className="button-group">
              <button onClick={this.handleClearForm} className= "add-spot-button">Add a New Fishing Spot!</button>
              <input className= "button" type="submit" value="Submit" />
            </div>
          </form>
        </div>
    )
  }
}

export default NewSpotFormContainer;
