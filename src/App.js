import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Ranks from './pages/Ranks'; 
import Login from './pages/login';
import Guidepage from './pages/guidepage';

function App() {
  return (
    <Router>
      <div id="root">
     
        <Routes>
          <Route exact path="/" component={<Login />} />
          <Route path="/login" component={<Login />} />
          <Route path="/home" component={<Home />} />
          <Route path="/profile" component={<Profile />} /> 
          <Route path="/ranks" component={<Ranks />} /> 
          <Route path="/guidepage" component={<Guidepage />} />
        </Routes>
       

      </div>
    </Router>
  );
}

export default App;
