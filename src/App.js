import React, { Component } from 'react';
import Statistics from './components/statistics/Statistics';
import Feedback from './components/feedback/Feedback';
import './App.css';

const buttonsName = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onVote = (name) =>
    this.setState((prevState) => {
      return { [name]: prevState[name] + 1 };
    });

  render() {
    let total = 0;
    for (let key in this.state) {
      total = total + this.state[key];
    }

    const positivePercentage = Math.round((this.state.good / total) * 100);

    return (
      <div className="container">
        <div className="feedback">
          <Feedback buttonsName={buttonsName} onVote={this.onVote} />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={
              isNaN(positivePercentage) ? '-' : `${positivePercentage}%`
            }
          />
        </div>
      </div>
    );
  }
}

export default App;
