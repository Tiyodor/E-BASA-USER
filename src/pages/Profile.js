import React from 'react';
import Navbar from './Navbar';
import Sidenav from './Sidenav';


function Profile() {
  return (
    <div>
      <div>
      <Navbar />
      <Sidenav />
    </div>
    
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>

      <div className="profile-container">
        <div className="left-container">
          <div className="info-container">
            <div className="profile-photo">
              <img className="photo" src="/assets/imgs/sample-photo.png" />
            </div>
            <a href="#Baguhin" className="button Baguhin-button">
              Baguhin
              </a>
              <img className="rank-photo" src="/assets/imgs/rank-sample.png" />
          </div>
        </div>
        
        <div className="right-container">
          <div className="info-box">
            <div className="info-item">
              <p>Pangalan: Jose Rizalskie</p>
            </div>
            <div className="info-item">
              <p>Edad: 7</p>
            </div>
            <div className="info-item">
              <p>Kasarian: Lalake</p>
            </div>
            <div className="info-item">
              <p>Baitang: 1</p>
              <div className='Trophy-container'>
              <img className="trophy-photo" src="/assets/imgs/trophy-sample.png" />
              <a>Bilang ng Tropeyo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="/login" className="logout-button" >
              log out
              </a>

    
    </div>
  );
}

export default Profile;
