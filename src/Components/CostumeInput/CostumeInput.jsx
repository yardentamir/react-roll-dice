import React from 'react';
import "./CostumeInput.scss";

export default function TextInputs({ callBack, text, id, value, type }) {
  return (
    <div>
      <p>{text}</p>
      <input type={type} id={id} onChange={callBack} value={value}></input>
    </div>
  )
}