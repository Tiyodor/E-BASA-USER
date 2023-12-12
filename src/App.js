import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
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


const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [scores, setScores] = useState({
    BEGINNER: 0,
    EASY: 0,
    INTERMEDIATE: 0,
    CHALLENGING: 0,
    ADVANCED: 0,
  });

  useEffect(() => {
    // Fetch questions from Laravel API
    axios.get('http://localhost:8000/api/questions').then((response) => {
      setQuestions(response.data);
    });
  }, []);

  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer.is_correct === 1;
    const difficulty = questions[currentQuestion].course.difficulty;

    // Update user's answers
    setUserAnswers((prevAnswers) => [...prevAnswers, { questionId: currentQuestion, isCorrect }]);

    // Update scores based on difficulty and category
    if (isCorrect) {
      setScores((prevScores) => ({
        ...prevScores,
        [difficulty]: prevScores[difficulty] + getDifficultyScore(difficulty),
      }));
    }

    // Move to the next question
    setCurrentQuestion((prev) => prev + 1);
  };

  const calculateResults = () => {
    const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
    return { totalScore, scores };
  };

  const getDifficultyScore = (difficulty) => {
    switch (difficulty) {
      case 'BEGINNER':
        return 2;
      case 'EASY':
        return 3;
      case 'INTERMEDIATE':
        return 4;
      case 'CHALLENGING':
        return 5;
      case 'ADVANCED':
        return 6; // Adjust this based on your actual scoring logic for ADVANCED
      default:
        return 0;
    }
  };

  const results = calculateResults();
  
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
          <Route path="/quiz" element={ currentQuestion < questions.length ? (
  <Question question={questions[currentQuestion]}
    handleAnswer={handleAnswer}  /> ) : (
  <div>
    <h2>Exam completed! Display results here</h2>
    <p>PAG UNAWA SA NAPAKINGAN: {scores.BEGINNER}/20</p>
    <p>PAG UNAWA SA BINASA: {scores.EASY}/20</p>
    <p>PAGSUSURI SA BOKABULARYO: {scores.INTERMEDIATE}/20</p>
    <p>WIKA AT GRAMATIKA: {scores.CHALLENGING}/20</p>
    <p>Total Score: {results.totalScore}</p>
  </div>)} />
 </Routes>
      </div>
    </Router>
  );
};

export default App;
