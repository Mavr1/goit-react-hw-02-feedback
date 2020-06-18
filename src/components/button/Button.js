import React from 'react';

const Button = ({ name, onVote }) => (
  <button className="buttonVote" type="button" onClick={() => onVote(name)}>
    {name}
  </button>
);

export default Button;
