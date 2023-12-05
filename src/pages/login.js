import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        // Handle error response, e.g., show an error message
        console.error('Login failed');
        return;
      }

      const data = await response.json();
      // Assuming your API returns a token
      const token = data.token;

      // Handle the token as needed, e.g., store it in localStorage
      localStorage.setItem('token', token);
      
      // Log details to console
      console.log('Login success!');
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Token:', token);

      // Redirect to guidepage.js after successful login
      navigate('/home');
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <>
     <div className='loginbot'>
      <img src={process.env.PUBLIC_URL + '/assets/imgs/loginbot.png'}  />
    </div>
    <div className='loginbg'>
      <div className="clouds">
        <img src={process.env.PUBLIC_URL + '/assets/imgs/clouds1.png'} className="clouds-img" alt="Clouds" />
      </div>

      
        <img
          src={process.env.PUBLIC_URL + '/assets/imgs/nav-logo.png'}
          alt="Centered Image"
          className="centered-image"
        />
    
      <div className="login-container">
        <input
          type="text"
          id="username"
          placeholder="Numero ng ID"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="button" onClick={handleLogin}>
          MAG LOG IN
        </button>
      </div>
      </div>
    </>
  );
};

export default Login;