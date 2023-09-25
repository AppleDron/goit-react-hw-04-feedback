import React from 'react';
import {
  FeedbackOptionsButton,
  FeedbackOptionsContainer,
} from './FeedbackOptions.styled';

const FeedbackOptions = ({ getFeedbacks }) => {
  const handleClick = e => {
    getFeedbacks(e.target.name);
  };

  return (
    <>
      <FeedbackOptionsContainer>
        <FeedbackOptionsButton name="good" onClick={handleClick}>
          Good
        </FeedbackOptionsButton>
        <FeedbackOptionsButton name="neutral" onClick={handleClick}>
          Neutral
        </FeedbackOptionsButton>
        <FeedbackOptionsButton name="bad" onClick={handleClick}>
          Bad
        </FeedbackOptionsButton>
      </FeedbackOptionsContainer>
    </>
  );
};

export default FeedbackOptions;
