import React from 'react';
import { browserHistory, Link } from 'react-router';

const ReviewShow = (props) => {
  return(
    <div>
      <h2>{props.rating}</h2>
      <h2>{props.season}</h2>
      <h3>{props.body}</h3>
    </div>
  )
}
