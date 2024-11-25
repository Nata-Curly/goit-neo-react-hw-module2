import css from "./Options.module.css";

const Options = ({ options, totalFeedback, updateFeedback, resetFeedback }) => {
  return (
    <div className={css.btns}>
      {options.map((option) => (
        <button
          className={css.btn}
          key={option}
          onClick={() => updateFeedback(option)}
          type="button"
        >
          {option}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button className={css.btn} onClick={resetFeedback} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
