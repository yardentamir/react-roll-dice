import React from 'react';
import "./Buttons.scss";
export default function Buttons({ callback, text }) {
  return (
    <button className="button-17" onClick={callback}>{text}</button>
  )
}