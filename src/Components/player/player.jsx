import React from "react";
import "./player.scss";

export default function Player({ id, totalScore, tempScore, playerName }) {
  return (<div id={id} className="player-div">
    <h2>{playerName}</h2>
    <h3>Total Score</h3>
    <div>{totalScore}</div>
    <div><h3>current</h3>
      <p>{tempScore}</p>
    </div>
  </div>)

}

