import React from 'react';

const Question = ({ question, answers, handleAnswerSelection }) => {
  return (
    <div class="panuto-carousel panuto">
    <div>
      <h2>{question}</h2>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerSelection(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Question;
