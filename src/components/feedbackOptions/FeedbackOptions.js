import React from 'react';
import Button from '../button/Button';

const FeedbackOptions = ({ buttonsName }) => {
  console.log(buttonsName);
  return (
    <div className="feedbackControls">
      {buttonsName.map((item) => (
        <Button key={item} name={item} />
      ))}
    </div>
  );
};

FeedbackOptions.defaultProps = {
  buttonsName: [],
};

export default FeedbackOptions;
