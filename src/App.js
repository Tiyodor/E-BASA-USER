import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Ranks from './pages/Ranks';
import Login from './pages/login'; // Ensure the correct filename casing
import Guidepage from './pages/guidepage';

const App = () => {
  return (
    <Router>
      <div id="root">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/ranks" element={<Ranks />} />
          <Route path="/guidepage" element={<Guidepage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
