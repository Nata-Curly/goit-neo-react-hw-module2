import css from "./Feedback.module.css";

const Feedback = ({
  options: { good, neutral, bad },
  totalFeedback,
  totalPositive,
}) => {
  return (
    <ul className={css.list}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedback}</li>
      <li>Positive: {totalPositive}%</li>
    </ul>
  );
};

export default Feedback;
