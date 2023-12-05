import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Mabuhay = () => {
    const [selectedMenu, setSelectedMenu] = useState('Home');

    const handleMenuClick = (menu) => {
        setSelectedMenu(menu);
      };
    return(
        <div class="panuto-carousel panuto">
        <div class="">
            <img src="/assets/imgs/ingame/mabuhay.png" id="mabuhay-image" />
        </div>
        <Link to="/panuto" onClick={() => handleMenuClick('panuto')}>
        <img src='/assets/imgs/ingame/sunod.png' id='sunod-image' />
        </Link>
    </div>
    )
}

export default Mabuhay;