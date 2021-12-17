import React from "react";
import "./player.scss";

export default function Player({ id, totalScore, tempScore, playerName, playerTurn }) {
  return (<div id={id} className={`player-div ${playerTurn === id ? "is-active" : ""}`}>
    <h2>{playerName}</h2>
    <h3>Total Score</h3>
    <div>{totalScore}</div>
    <div><h3>current</h3>
      <p>{tempScore}</p>
    </div>
  </div>)

}

