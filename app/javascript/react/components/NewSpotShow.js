import React from 'react'
import { Link } from 'react-router'

const NewSpotTile = (props) => {
  return(
    <div className='spot-tile text-center'>
      <div>
        <h1><Link to={`/spots/${props.id}`}>{props.name}</Link></h1>
        <h4>{props.state}</h4>
      </div>
    </div>
  )
}

export default NewSpotTile;
