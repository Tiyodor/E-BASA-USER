import React from 'react';
import Botnav from './Botnav'
import './login.css'
function Guidepage (){
return (
    <>
    <Botnav />
    <div className='guidepage-bg'>
    <img src={process.env.PUBLIC_URL + '/assets/imgs/guidebg.png'} />
    </div>

    </>
)
}

export default Guidepage;