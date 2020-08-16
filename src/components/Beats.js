import React from 'react';
import './Beats.css';
import Audio from './Audio'



function Beats() {

  return (
    <div className='Beats'id="beats">
      <Audio name='Super bit' photo='photo' url='http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3'></Audio>
      <Audio name='Super bit1' photo='photo1' url='http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg'></Audio>
      <Audio name='Super bit2' photo='photo2'url='http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/menu.ogg'></Audio>
      <Audio name='Super bit3' photo='photo3' url='http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a'></Audio>
    </div>
  );
}

export default Beats;