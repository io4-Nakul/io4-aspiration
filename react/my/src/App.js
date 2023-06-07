import React, { useState } from 'react';
import Getapi from './Getapi';
const Card = () => {
  const [number, setNumber] = useState(0);

  const increaseByOne = () => {
    setNumber(number + 1);
  };

  const decreaseByOne = () => {
    setNumber(number - 1);
  };

  const increaseByTen = () => {
    setNumber(number + 10);
  };

  const resetNumber = () => {
    setNumber(0);
  };

  return (
    <>
    <div className="card">
      <h1>Number: {number}</h1>
      <button onClick={increaseByOne}>Increase by 1</button>
      <button onClick={decreaseByOne}>Decrease by 1</button>
      <button onClick={increaseByTen}>Increase by 10</button>
      <button onClick={resetNumber}>Reset all</button>
    </div>
    <Getapi/>
    </>
  );
};


  
  






export default Card;
