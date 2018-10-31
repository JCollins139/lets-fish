import React, { Component } from 'react'

class SpotShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      spot: []
    }
  }

  componentDidMount(){

    let spotId = this.props.params.id
    fetch(`/api/v1/spots/${spotId}`)
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
      this.setState({ spot: body })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }
  render(){
    let theSpot = this.state.spot

    let ramp;

      if (theSpot.boat_ramp) {
        ramp = "Has a ramp!"
      } else {
        ramp = "Does not have a ramp"
      }

    let location;

      if (theSpot.address) {
        location = `Address: ${theSpot.address}`
      } else {
        location = "No Address Provided"
      }

      let parkingLot;

        if (theSpot.parking) {
          parkingLot = "Yes there is a public parking available"
        } else {
          parkingLot = "No there is no parking lot unfortunately"
        }

      let theDock;

        if (theSpot.dock) {
          theDock = "Yes there is a public dock available"
        } else {
          theDock = "No public dock available"
        }


    console.log(theSpot.boat_ramp)
    return(
      <div className='text-center spot-show'>

        <h2>Welcome to {theSpot.name}!</h2>
        <h3>Address: </h3>
        <h4>{location}</h4>
        <h3>Town/City: </h3>
        <h4>{theSpot.city}</h4>
        <h3>State: </h3>
        <h4>{theSpot.state}</h4>
        <h3>Boat Ramp: </h3>
        <h4>{ramp}</h4>
        <h3>Parking:</h3>
        <h4>{parkingLot}</h4>
        <h3>Dock: </h3>
        <h4>{theDock}</h4>

      </div>
    )
  }

}

export default SpotShow
