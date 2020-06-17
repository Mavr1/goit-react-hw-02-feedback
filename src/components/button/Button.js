import React from 'react';

const Button = ({ name, onVote }) => (
  <button type="button" onClick={onVote}>
    {name}
  </button>
);

export default Button;
