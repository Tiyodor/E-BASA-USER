import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidenav = () => {
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };
  return (
    <div className="sidenav">
       <Link to="/" onClick={() => handleMenuClick('#')}>
        <img src="/assets/imgs/menubt.png" id="menubt-image" />
      </Link>

      <Link to="/home" onClick={() => handleMenuClick('home')}>
        <img src="/assets/imgs/homebt.png" id="homebt-image" />
      </Link>

      <a className="active" href="#sound">
        <img src="/assets/imgs/soundbt.png" id="soundbt-image" />
      </a>

      <a className="active" href="#setting">
        <img src="/assets/imgs/settingbt.png" id="settingbt-image" />
      </a>
    </div>
  );
}

export default Sidenav;
