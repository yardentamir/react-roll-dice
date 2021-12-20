import React from 'react';
import "./Buttons.scss";

export default function Buttons({ callback, text, id }) {
  return (
    <button className={`button-17 ${id === "startGame" ? "center-button" : ""}`} onClick={callback}>{text}</button>
  )
}