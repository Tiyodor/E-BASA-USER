import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Home2 from './pages/Home2';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import Home5 from './pages/Home5';
import Profile from './pages/Profile';
import Ranks from './pages/Ranks';
import Login from './pages/login'; // Ensure the correct filename casing
import Mabuhay from './pages/mabuhay';
import Panuto from './pages/panuto';
import Up1 from './pages/up1';
import Question from './game/Question';
import Answer from './game/Answer';

const questionsData = [
  {
    question: 'Anong letra and kasunod ng "A"?',
    answers: ['Ss', 'Cc', 'Bb', 'Dd'],
    correctAnswer: 'Bb',
  },
  {
    question: 'Piliin ang katunog ng unang letra ng larawan sa itaas',
    answers: ['Ss', 'Ll', 'Kk', 'Pp'],
    correctAnswer: 'Ll',
  },
  {
    question: 'Piliin ang katunog ng unang letra ng larawan sa itaas',
    answers: ['Ss', 'Ll', 'Mm', 'Pp'],
    correctAnswer: 'Mm',
  },
  {
    question: 'Ano ang salitang kasama ng salitang “Puno”',
    answers: ['Araw', 'Dahon', 'Ulan'],
    correctAnswer: 'Dahon',
  },
  {
    question: 'Piliin ang bagay na kasing hugis ng larawan sa itaas',
    answers: ['Pizza', 'Karton', 'Planeta'],
    correctAnswer: 'Planeta',
  },
  // Add more questions similarly
];


const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showNextQuestion, setShowNextQuestion] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);

    // Automatically move to the next question after 1.5 seconds (1500 milliseconds)
    setTimeout(() => {
      setSelectedAnswer('');
      setCurrentQuestion(currentQuestion + 1);
    }, 500);
  };

  const nextQuestion = () => {
    setShowNextQuestion(false);
    setSelectedAnswer('');
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <Router>
      <div id="root">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/home4" element={<Home4 />} />
          <Route path="/home5" element={<Home5 />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ranks" element={<Ranks />} />
          <Route path="/panuto" element={<Panuto />} />
          <Route path="/mabuhay" element={<Mabuhay />} />
          <Route path="/up1" element={<Up1 />} />
          <Route path="/quiz" element={
            currentQuestion < questionsData.length ? (
                <Question
                  question={questionsData[currentQuestion].question}
                  answers={questionsData[currentQuestion].answers}
                  handleAnswerSelection={handleAnswerSelection}
                />
            ) : (
              <p>Ang galing mo! na tapos mo ang unang pag-susulit!</p>
            )} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
