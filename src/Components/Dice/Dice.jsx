import React from 'react';
import "./Dice.scss";

export default function Dice({ value }) {
  return (
    <div className="dice">
      <img src={`../src/Assets/Images/dice/dice-${value}.png`} alt={`dice number ${value}`}></img>
    </div>
  )
}