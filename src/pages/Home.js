import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Sidenav from './Sidenav';

export default function Home() {
    return (
      <>
      <div>
        <Navbar />
        <Sidenav />
      </div>
      <div className='home-carousel'>
        <img src='/assets/imgs/ingame/prev.png' id='prev-image' />
        <div >
            <img src="/assets/imgs/ingame/aralin.png" className='gamebt' id='aralin-image'/>
        <img src="/assets/imgs/ingame/aralin1.png" className="aralin" alt="AralinImage" />
        </div>

        <div >
        <img src="/assets/imgs/ingame/pagsusulit.png" className='gamebt' id='pagsusulit-image' />
        <img src="/assets/imgs/ingame/pagsusulit1.png" className="pagsusulit" alt="PagsusulitImage" />
        </div>

        <img src='/assets/imgs/ingame/next.png' id='next-image'/>  
      </div>
      </>
      );
}
