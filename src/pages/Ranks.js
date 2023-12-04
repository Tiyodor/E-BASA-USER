import React from 'react'
import Navbar from './Navbar';
import Sidenav from './Sidenav';

export default function Ranks() {
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

   

    <div className="Rank-container">
    <div className="Rank-left">
      <img src="/assets/imgs/rank-sample.png" id="rank-big"/>
      
      <div className="Student-rank">
      <a className="Rank-num">1</a>
      <img src="/assets/imgs/girl.png" id="profile-photo"/>
      <img src="/assets/imgs/rank-sample.png" id="rank-small"/>
      <div className="student-info">
      <a className="Student-name">Maria</a>
      <a className="Score">20</a>
     </div>
      <img src="/assets/imgs/trophy-small.png" id="trophy-small"/>
     </div>


     <div className="Student-rank">
      <a className="Rank-num">2</a>
      <img src="/assets/imgs/boy1.png" id="profile-photo"/>
      <img src="/assets/imgs/rank-sample.png" id="rank-small"/>
      <div className="student-info">
      <a className="Student-name">Miguel</a>
      <a className="Score">19</a>
      </div>
      <img src="/assets/imgs/trophy-small.png" id="trophy-small"/>
      </div>

     <div className="Student-rank">
      <a className="Rank-num">3</a>
      <img src="/assets/imgs/boy2.png" id="profile-photo"/>
      <img src="/assets/imgs/rank-sample.png" id="rank-small"/>
      <div className="student-info">
      <a className="Student-name">Raul</a>
      <a className="Score">17</a>
       </div>
      <img src="/assets/imgs/trophy-small.png" id="trophy-small"/>
     </div>

    </div>
    <div className="Rank-right">

      <div className="Student-rank">
        <img src="/assets/imgs/girl.png" id="profile-photo"/>
       <img src="/assets/imgs/rank-sample.png" id="rank-small"/>
       <div className="student-info">
       <a className="Score">20</a>
      </div>
       <img src="/assets/imgs/trophy-small.png" id="trophy-small"/>
      </div>

      <div className="Student-rank">
        <img src="/assets/imgs/boy1.png" id="profile-photo"/>
        <img src="/assets/imgs/rank-sample.png" id="rank-small"/>
        <div className="student-info">
        <a className="Score">19</a>
        </div>
        <img src="/assets/imgs/trophy-small.png" id="trophy-small"/>
        </div>
  
       <div className="Student-rank">
        <img src="/assets/imgs/boy2.png" id="profile-photo"/>
        <img src="/assets/imgs/rank-sample.png" id="rank-small"/>
        <div className="student-info">
        <a className="Score">17</a>
         </div>
        <img src="/assets/imgs/trophy-small.png" id="trophy-small"/>
       </div>
       
       <div className="Student-rank">
        <img src="/assets/imgs/boy1.png" id="profile-photo"/>
        <img src="/assets/imgs/rank-sample.png" id="rank-small"/>
        <div className="student-info">
        <a className="Score">19</a>
        </div>
        <img src="/assets/imgs/trophy-small.png" id="trophy-small"/>
        </div>
  
       <div className="Student-rank">
        <img src="/assets/imgs/boy2.png" id="profile-photo"/>
        <img src="/assets/imgs/rank-sample.png" id="rank-small"/>
        <div className="student-info">
        <a className="Score">17</a>
         </div>
        <img src="/assets/imgs/trophy-small.png" id="trophy-small"/>
       </div>

       <div className="Student-rank">
        <img src="/assets/imgs/boy1.png" id="profile-photo"/>
        <img src="/assets/imgs/rank-sample.png" id="rank-small"/>
        <div className="student-info">
        <a className="Score">19</a>
        </div>
        <img src="/assets/imgs/trophy-small.png" id="trophy-small"/>
        </div>
  
       <div className="Student-rank">
        <img src="/assets/imgs/boy2.png" id="profile-photo"/>
        <img src="/assets/imgs/rank-sample.png" id="rank-small"/>
        <div className="student-info">
        <a className="Score">17</a>
         </div>
        <img src="/assets/imgs/trophy-small.png" id="trophy-small"/>
       </div>

       
    </div>
  </div>
   </div>
  )
}
