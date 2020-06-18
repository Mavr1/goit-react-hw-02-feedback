import React from 'react';
import Section from '../section/Section';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Section name="Statistics">
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}</p>
  </Section>
);

export default Statistics;
