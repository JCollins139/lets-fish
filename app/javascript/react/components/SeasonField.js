import React from 'react';

const SeasonField = (props) => {
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

export default SeasonField;
