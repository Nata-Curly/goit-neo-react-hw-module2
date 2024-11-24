import { useEffect, useState } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

const defaultState = () => {
  const currentFeedback = localStorage.getItem("feedback");
  if (currentFeedback) {
    return JSON.parse(currentFeedback);
  }
  return {
    good: 0,
    neutral: 0,
    bad: 0,
  };
};

function App() {
  const [feedback, setFeedback] = useState(defaultState);

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((feedback) => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const countPositiveFeedback = () => {
    return Math.round((feedback.good / totalFeedback) * 100);
  };

  return (
    <>
      <Description />
      <Options
        options={Object.keys(feedback)}
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          options={feedback}
          totalFeedback={totalFeedback}
          totalPositive={countPositiveFeedback()}
        />
      ) : (
        <Notification message={"No feedback yet"} />
      )}
    </>
  );
}

export default App;
