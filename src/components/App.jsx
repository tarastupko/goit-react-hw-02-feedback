import React, { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification"


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (e) => {
    this.setState((prevState) => ({ [e.target.name]: prevState[e.target.name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return this.countTotalFeedback() !== 0
      ? ((good / this.countTotalFeedback()) * 100).toFixed(2)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state; // Destructure state variables

    const feedbackOptions = ["good", "neutral", "bad"];
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()
            }
            positivePercentage={this.countPositiveFeedbackPercentage()
            
            } /> : <Notification message="There is no feedback" />}
        </Section>
      </div>
    );
  }
}