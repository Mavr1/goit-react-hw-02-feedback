import React from 'react';

const Section = ({ name, children }) => (
  <section>
    <h2>{name}</h2>
    {children}
  </section>
);

export default Section;
