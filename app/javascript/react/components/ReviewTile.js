import React from 'react'

const ReviewTile = (props) => {

  return(
    <div>
      <div>
        <h4>{props.season}</h4>
        <h4>Rating: {props.rating}</h4>
        <h4>{props.body}</h4>
      </div>
    </div>
  )

}

export default ReviewTile;
