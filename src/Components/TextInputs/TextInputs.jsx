import React from 'react';
import "./TextInputs.scss";

export default function TextInputs({ callBack, text, id, value }) {
  return (<div>
    <p>{text}</p>
    <input type="text" id={id} onChange={callBack} value={value}></input>
  </div>)

}