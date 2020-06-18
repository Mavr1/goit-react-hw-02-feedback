import React from 'react';
import Button from '../button/Button';

const FeedbackOptions = ({ buttonsName, onVote }) => {
  return (
    <div className="feedbackControls">
      {buttonsName.map((item) => (
        <Button key={item} name={item} onVote={onVote} />
      ))}
    </div>
  );
};

FeedbackOptions.defaultProps = {
  buttonsName: [],
};

export default FeedbackOptions;
