import React from 'react';
export default function HoldAndDiceButtons({ callback, text }) {
  return (
    <button className="Button-Styling" onClick={(e) => callback(e)}>{text}</button>)
}