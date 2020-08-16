import React from 'react';
import './NawBar.css';

function NawBar() {
  return (
    <div className="NawBar" id="nav">
      <div className="NawBarLink smoothscroll" id="lust">
        <a href="#prices">Prices</a>
      </div>
      <div className="NawBarLink smoothscroll">
        <a href="#beats">Beats</a>
      </div>
      <div className="NawBarLink smoothscroll">
        <a href="#home">Home</a>
      </div>
    </div>
  );
}

export default NawBar;