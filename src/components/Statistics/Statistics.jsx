import React from 'react';

const Statistics = props => {
  const {
    countTotalFeedbacks,
    countPositiveFeedbackPercentage,
    good,
    neutral,
    bad,
  } = props;

  return (
    <>
      <div>
        <h3>Statistics</h3>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
      </div>
      <p>Total: {countTotalFeedbacks()}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
    </>
  );
};

export default Statistics;
