import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Panuto = () => {
    const [selectedMenu, setSelectedMenu] = useState('Home');
       
    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
      };
    return (
        <>
        <div class="panuto-carousel panuto">
        <Link to="/mabuhay" onClick={() => handleMenuClick('Mabuhay')}>
        <img src='/assets/imgs/ingame/balik.png' id='balik-image' />
        </Link>
        <div class="">
            <img src="/assets/imgs/ingame/panuto.png" id="mabuhay-image" />
        </div>
        <Link to="/Ranks" onClick={() => handleMenuClick('Ranks')}>
        <img src='/assets/imgs/ingame/sunod.png' id='sunod-image' />
        </Link>
    </div></>
    )
}

export default Panuto;