import React from 'react';

const Answer = ({ answer, nextQuestion }) => {
  return (
    <div>
      <p>You selected: {answer}</p>
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default Answer;
