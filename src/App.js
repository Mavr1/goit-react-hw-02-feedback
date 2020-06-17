import React, { Component } from 'react';
import Statistics from './components/statistics/Statistics';
import Feedback from './components/feedback/Feedback';

const buttonsName = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onVote = () => {};

  render() {
    return (
      <div className="container">
        <Feedback buttonsName={buttonsName} />
        <Statistics />
      </div>
    );
  }
}

export default App;
