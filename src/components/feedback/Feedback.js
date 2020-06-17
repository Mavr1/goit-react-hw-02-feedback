import React from 'react';
import Section from '../section/Section';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';

const Feedback = ({ buttonsName }) => (
  <Section name="Please leave feedback">
    <FeedbackOptions buttonsName={buttonsName} />
  </Section>
);

export default Feedback;
