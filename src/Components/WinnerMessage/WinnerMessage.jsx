import React from 'react';
import "./WinnerMessage.scss";
import Buttons from "../Buttons/Buttons";

export default function WinnerMessage({ winnerName, winnerId }) {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="center">
          <h3>The Winner is {winnerName}</h3>
          <img src="/assets/images/icegif-3602.gif" alt="confetti" />
          <Buttons text="NEW GAME" />
        </div>
      </div>
    </div>
  )
}