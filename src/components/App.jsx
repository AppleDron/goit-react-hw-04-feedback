import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const getFeedbacks = feedback => {
    if (feedback === 'good') return setGood(prevGood => prevGood + 1);
    if (feedback === 'neutral')
      return setNeutral(prevNeutral => prevNeutral + 1);
    if (feedback === 'bad') return setBad(prevBad => prevBad + 1);
  };

  const countTotalFeedbacks = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedbacks();

    if (!totalFeedbacks) {
      return 0;
    }

    const positiveFeedbacks = (good / totalFeedbacks) * 100;
    return Math.round(positiveFeedbacks);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions getFeedbacks={getFeedbacks} />
        {countTotalFeedbacks() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedbacks={countTotalFeedbacks}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </>
  );
};

export default App;
