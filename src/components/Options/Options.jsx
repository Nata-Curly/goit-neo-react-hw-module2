const Options = ({ options, totalFeedback, updateFeedback, resetFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => updateFeedback(option)}
          type="button"
        >
          {option}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button onClick={resetFeedback} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
