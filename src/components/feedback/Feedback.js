import React from 'react';
import Section from '../section/Section';
import FeedbackOptions from '../feedbackOptions/FeedbackOptions';

const Feedback = ({ buttonsName, onVote }) => (
  <Section name="Please leave feedback">
    <FeedbackOptions buttonsName={buttonsName} onVote={onVote} />
  </Section>
);

export default Feedback;
