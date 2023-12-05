import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Up1 = () => {
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div class="intro">
    <Link to="/mabuhay" onClick={() => handleMenuClick('mabuhay')}>
    <img src="/assets/imgs/ingame/susunod.png"  id="susunod-image"  />
    </ Link>
  </div>

  )}

  export default Up1;