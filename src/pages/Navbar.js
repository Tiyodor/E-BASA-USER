import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="topnav">
    <Link to="/home" onClick={() => handleMenuClick('home')}>
  <img src="/assets/imgs/nav-logo.png" alt="Home" />
</Link>


    <Link to="/Ranks" onClick={() => handleMenuClick('Ranks')}>
        <img src="/assets/imgs/trophy.png" alt="trophy" id="trophy-image" />
      </Link>

      <Link to="/home" onClick={() => handleMenuClick('home')}>
  <div className="user-search-container">
    <div className="search-bar">
      <input type="text" id="search-input" />
      <img src="/assets/imgs/search-logo.png" id="search-button" alt="Search" />
    </div>
  </div>
</Link>

        <Link to="/profile" onClick={() => handleMenuClick('profile')}>
          <img src="/assets/imgs/user-icon.png" alt="user-icon" />
     </Link>
 
    </div>
  );
}

export default Navbar;
