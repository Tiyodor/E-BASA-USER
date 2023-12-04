import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
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
        <input type="text" id="username" placeholder="Username" name="username" required />
        <input type="password" id="password" placeholder="Password" name="password" required />
        
        <Link to="/home" onClick={() => handleMenuClick('home')}>
          <button type="submit">LOG IN</button>
        </Link>

      </div>
    </div>
    
    </>
  );
}

export default Login;
