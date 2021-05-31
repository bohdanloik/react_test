import React from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { Rating } from './components/Rating/Rating';
import { Switcher } from './components/Switcher/Switcher';
import { AccordionUncontrolled } from './components/AccordionUncontrolled/AccordionUncontrolled';
import { RatingUncontrolled } from './components/RatingUncontrolled/RatingRatingUncontrolled';

function App() {
  return (
    <div>
      <Accordion title = {'Hello'} collapsed={true}/>
      <AccordionUncontrolled title = {'New Component'} />
      <Rating selectedNumber = {3}/>
      <RatingUncontrolled/>
      <Switcher/>
    </div>
  );
}


export default App;
