import React from 'react';

const Question = ({ question, handleAnswer }) => {
  return (
    <div className='panuto'>
      <div className='blackboard'>
    <div>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer.id} onClick={() => handleAnswer(answer)}>
            {answer.answer_text}
          </li>
        ))}
      </ul>
      <h2>{question.question_text}</h2>

      </div>
    </div>
    </div>
  );
};

export default Question;