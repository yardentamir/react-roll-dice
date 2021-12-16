import React, { Component } from "react";
import "./dicegame.scss";
import OptionsContainer from "../Components/OptionContainer/OptionsContainer";
import Player from "../Components/player/Player";


export default class DiceGame extends Component {
  state = {
    pointsToWin: 100,
    dices: [null, null],
    gameOver: false,
    playersTurn: 0,
    players: [
      {
        totalScore: 0,
        tempScore: 0,
      },
      {
        totalScore: 0,
        tempScore: 0,
      },
    ]
  }

  updateDices() {
    this.setState({ dices: this.state.dices });
  }

  handelDices() {
    for (let i = 0; i < 2; i++) {
      this.setState((pervState) => {
        return pervState.dices[i] = Math.floor(Math.random() * 6) + 1;
      })
    }
  }


  render() {
    return (
      <div className="flex-container">
        <Player />
        <OptionsContainer />
        <Player />
      </div>
    )
  }
}