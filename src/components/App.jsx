import { useState} from 'react';
import { Container } from '@mui/material';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
const countTotalFeedback = () => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
  return Math.round((good / countTotalFeedback()) * 100);
  };
  
  const handleClick = ({ target: { name } }) => {
    switch (name) {
      case 'bad':
        setBad(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'good':
        setGood(prev => prev + 1);
        break;
      default:
        return;
    }
  };
  
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{good, neutral, bad}}
          onLeaveFeedback={handleClick}
        />
      </Section>
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage() || 0}
        />
      </Section>
    </Container>
  );
}

export default App