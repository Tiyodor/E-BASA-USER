import React from 'react';



function Botnav() {
return (
    <div class="botnav">  
    <div class="botnav-bt" href="#home">
      <a href='/home'>
      <img src="/assets/imgs/ingame/home.png" alt="home" id="home-image" />
      </a>
    </div>
    <div class="botnav-bt" href="#home">
      <img src="/assets/imgs/ingame/music.png" alt="music" id="music-image" />
    </div> 
    <div class="botnav-bt" href="#sound">
      <img src="/assets/imgs/ingame/settings.png" alt="settings" id="settings-image" />
    </div>
    <div class="botnav-bt" href="#setting">
      <img src="/assets/imgs/ingame/menu.png" alt="menu" id="menu-image" />
    </div> 
    <div class="botnav-bt" href="#home">
      <img src="/assets/imgs/ingame/prev.png" alt="prev" id="prev-image" />
    </div> 
    <div class="botnav-bt" href="#sound">
      <img src="/assets/imgs/ingame/pause.png" alt="pause" id="pause-image" />
    </div>
    <div class="botnav-bt" href="#setting">
      <a href="G:/Project/React/e-basa/src/pages/htmls/gamepage2.html">
      <img src="/assets/imgs/ingame/next.png" alt="next" id="next-image" />
    </a>
    </div> 
  </div>
)
}

export default Botnav;