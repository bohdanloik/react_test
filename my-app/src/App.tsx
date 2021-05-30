import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Accordion } from './Accordion';

function App() {
  return (
    <div>
      Hello World!
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
      <Accordion title = {'Hello'} collapsed={true}/>
      <Accordion title = {'New Component'} collapsed={true}/>
      <Accordion title = {'New Component'} collapsed={false}/>

    </div>
  );
}

function Star () {
  return (
    <div>
      <h2>Star</h2>
    </div>
  )
}
export default App;
