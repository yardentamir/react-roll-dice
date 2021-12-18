import React from 'react';
import "./Dice.scss";

export default function Dice({ value }) {
  return (
    <div >
      <img className="dice" src={`/assets/images/dice/dice-${value}.png`} alt={`dice number ${value}`}></img>
    </div>
  )
}