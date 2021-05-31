import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';
import { Switcher } from './components/Switcher/Switcher';

function App() {
  return (
    <div>
      <Rating selectedNumber = {3}/>
      <Accordion title = {'Hello'} collapsed={true}/>
      <Accordion title = {'New Component'} collapsed={true}/>
      <Accordion title = {'New Component'} collapsed={false}/>
      <Rating selectedNumber = {2}/>
      <Switcher on={false}/>

    </div>
  );
}


export default App;
