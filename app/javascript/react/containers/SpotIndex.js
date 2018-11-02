import React, { Component } from 'react'
import SpotTile from '../components/SpotTile'

class SpotIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      spots: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/spots`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ spots: body.spots })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let mappedSpots = this.state.spots.map(spot => {

      return(
        <SpotTile
          key = {spot.id}
          id = {spot.id}
          name = {spot.name}
          address = {spot.address}
          city = {spot.city}
          state = {spot.state}
          boatRamp = {spot.boat_ramp}
          parking = {spot.parking}
          dock = {spot.dock}
        />
      )
    })
    return(
      <div className="text-center all-spots medium-12 columns">
        {mappedSpots}
        {this.props.children}
      </div>
    )
  }


}

export default SpotIndex
