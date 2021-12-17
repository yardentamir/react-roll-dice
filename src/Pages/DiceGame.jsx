import React, { Component } from "react";
import "./dicegame.scss";
import NewGameButton from "../Components/NewGameButton/NewGameButton";
import HoldAndDiceButtons from "../Components/HoldAndDiceButtons/HoldAndDiceButtons";
import TopPointsInput from "../Components/TopPointsInput/TopPointsInput";
import Player from "../Components/player/Player";
import Dice from "../Components/Dice/Dice";


export default class DiceGame extends Component {

  constructor() {
    super();
    this.state = {
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
    this.handelDices = this.handelDices.bind(this);
  }

  handelDices() {
    for (let i = 0; i < 2; i++) {
      this.setState((pervState) => {
        return pervState.dices[i] = Math.floor(Math.random() * 6) + 1;
      })
    }
    this.setState({ dices: this.state.dices });
    console.log(this.state.dices)
  }

  renderDices() {
    return this.state.dices.map((dice, i) => {
      console.log(dice)
      return <Dice key={i} value={dice} />
    })
  }


  render() {
    return (
      <div className="flex-container">
        <Player key="1" />
        <div className="Columns-container">
          <NewGameButton />
          {this.renderDices()}
          <HoldAndDiceButtons callback={this.handelDices} text="ROLL DICE" />
          <HoldAndDiceButtons callback={this.handelDices} text="HOLD" />
          <TopPointsInput />
        </div>
        <Player key="2" />
      </div>
    )
  }
}