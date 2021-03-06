import React from 'react';

const RatingField = (props) => {
  return(
    <label>{props.label}
      <textarea
        name={props.name}
        value={props.content}
        onChange={props.handleChange}
      />
    </label>
  );
}

export default RatingField;
