const Feedback = ({options, totalFeedback, totalPositive}) => {
  return (
    <ul>
      <li>Good: {options.good}</li>
      <li>Neutral: {options.neutral}</li>
      <li>Bad: {options.bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {totalPositive}%</li>
    </ul>
  );
};

export default Feedback;
