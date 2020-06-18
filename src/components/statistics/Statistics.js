import React from 'react';
import Section from '../section/Section';
import Notification from '../notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Section name="Statistics">
    {total > 0 ? (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}</p>
      </div>
    ) : (
      <Notification message={'No feedback given'} />
    )}
  </Section>
);

export default Statistics;
