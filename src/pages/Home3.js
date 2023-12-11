import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidenav from './Sidenav';

export default function Home() {
  const [selectedMenu, setSelectedMenu] = useState('Home');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

    return (
      <>
      <div>
        <Navbar />
        <Sidenav />
      </div>
      <div className='home-carousel'>
        <Link to="/home2" onClick={() => handleMenuClick('Home2')}>
        <img src='/assets/imgs/ingame/prev.png' id='prev-image' />
        </Link>
        <div >
            <img src="/assets/imgs/ingame/aralin.png" className='gamebt' id='aralin-image'/>
        <img src="/assets/imgs/ingame/aralin2.png" className="aralin" alt="AralinImage" />
        </div>

        <div >
        <img src="/assets/imgs/ingame/pagsusulit.png" className='gamebt' id='pagsusulit-image' />
        <img src="/assets/imgs/ingame/pagsusulit2.png" className="pagsusulit" alt="PagsusulitImage" />
        </div>

        <Link 
          to="/Home4" onClick={() => handleMenuClick('Home4')}>
        <img src='/assets/imgs/ingame/next.png' id='next-image'/>  
        </Link>
      </div>
        <img src='/assets/imgs/ingame/lvl3.png' id='level-image' />
      </>
      );
}
