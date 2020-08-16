import React from 'react';
import './Home.css';
import Button from './Button'
import Audio from './Audio'



function Home() {
    return (
        <div className="Home">
            <h1>Yung soprano shop</h1>
            <p>Author's beats by Yung Soprano</p>
            <Button></Button>
            {/* <div className='pack'>
                <Audio name='Mega bitlo' photo='photo'url='http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/win.ogg'></Audio>
                <Audio name='Mega bitlo1' photo='photo1'url='http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/win.ogg'></Audio>
                <Audio name='Mega bitlo2' photo='photo2'url='http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/win.ogg'></Audio>
                <Audio name='Mega bitlo3' photo='photo3'url='http://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/music/win.ogg'></Audio>
            </div> */}
        </div>

    );
}

export default Home;