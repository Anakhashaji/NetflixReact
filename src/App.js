import logo from './logo.svg';
import './App.css';
import React from 'react'
import {action,originals} from './urls'
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <RowPost url={originals} title="NETFLIX ORIGINALS"/>
      <RowPost url={action} title="Action " isSmall/>
      <RowPost url={action} title="Action " isSmall/>
    </div>
  );
}

export default App;
