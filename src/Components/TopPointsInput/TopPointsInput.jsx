import React from 'react';
import "./TopPointsInput.scss";

export default function TopPointsInput({ callBack, text, id, value }) {
  return (<div>
    <p>{text}</p>
    <input type="text" id={id} onChange={callBack} value={value}></input>
  </div>)

}