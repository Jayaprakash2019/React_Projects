import { useState } from 'react';
import './App.css';
import Accordian from './Components/accordian';
import Randomcolor from './Components/random-color';
import StarRating from './Components/Star_rating';

function App() {

  return (
    <>
    {/* Accordian component */}
    {/* <Accordian /> */}
    {/* Random color component */}
    {/* <Randomcolor /> */}
    {/* star rating */}
    <StarRating noOfstars={10} />
    </>
  );
}

export default App;
