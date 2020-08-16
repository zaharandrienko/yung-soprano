import React from 'react';
import './App.css';
import NawBar from './components/NawBar'
import Home from './components/Home'
import Beats from './components/Beats'
import Icons from './components/Icons'
import Info from './components/Info'


function App() {
  return (
    <div className="App" id="home">
      <Icons className='Icons'></Icons>
      <h1 className="beatsLogo">Beats</h1>
      <NawBar></NawBar>
      <Home></Home>
      <Beats></Beats>
      <Info></Info>
    </div>
  );
}

export default App;
