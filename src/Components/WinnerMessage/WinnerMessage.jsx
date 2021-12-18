import React from 'react';
import "./WinnerMessage.scss";
import Buttons from "../Buttons/Buttons";

export default function WinnerMessage({ winnerName, newGameCallback, backToEnterGameCallback }) {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="center">
          <h3>The Winner is {winnerName}</h3>
          <img src="/assets/images/icegif-3602.gif" alt="confetti" />
          <div className="button-group">
            <Buttons text="NEW GAME" callback={newGameCallback} />
            <Buttons text="BACK" callback={backToEnterGameCallback} />
          </div>
        </div>
      </div>
    </div>
  )
}