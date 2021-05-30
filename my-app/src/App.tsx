import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      Hello World!
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
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
