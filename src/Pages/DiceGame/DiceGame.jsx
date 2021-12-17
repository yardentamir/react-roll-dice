import React, { Component } from "react";
import "./dicegame.scss";
import NewGameButton from "../../Components/NewGameButton/NewGameButton";
import HoldAndDiceButtons from "../../Components/HoldAndDiceButtons/HoldAndDiceButtons";
import Player from "../../Components/player/Player";
import Dice from "../../Components/Dice/Dice";


export default class DiceGame extends Component {

  constructor(props) {
    super(props);
    console.log(props.maxPoints)
    this.state = {
      pointsToWin: sessionStorage.getItem('maxPoints'),
      gameOver: false,
      playersTurn: 0,
      players: [
        {
          name: sessionStorage.getItem('name0'),
          totalScore: 0,
          tempScore: 0,
        },
        {
          name: sessionStorage.getItem('name1'),
          totalScore: 0,
          tempScore: 0,
        },
      ]
    }
    this.handelDices = this.handelDices.bind(this);
    this.handelHold = this.handelHold.bind(this);
    this.dicesArr = [];
  }

  handelDices() {
    for (let i = 0; i < this.dicesArr.length; i++) {
      this.dicesArr[i] = Math.floor(Math.random() * 6) + 1;
    }
    console.log(this.dicesArr);
    if (this.dicesArr[0] === 6 && this.dicesArr[1] === 6) {
      this.resetCurrentPlayerValues();
      this.ChangeTurn();
    } else {
      this.totalScorePlayer(this.tempScorePlayer());
    }
  }

  renderDices() {
    return this.dicesArr.map((dice, i) => {
      return <Dice key={i} value={dice} />
    })
  }

  ChangeTurn() {
    console.log(this.state.playersTurn);
    this.setState((pervState) => {
      return pervState.playersTurn = 1 - pervState.playersTurn;
    });
  }

  totalScorePlayer(tempScorePlayer) {
    this.setState((pervState) => {
      return pervState.players[this.state.playersTurn].totalScore += tempScorePlayer;
    });
  }

  tempScorePlayer() {
    const tempScore = this.dicesArr.reduce((a, b) => a + b, 0);
    this.setState((pervState) => {
      return pervState.players[this.state.playersTurn].tempScore = tempScore;
    });
    return tempScore;
  }

  resetCurrentPlayerValues() {
    this.setState((pervState) => {
      return pervState.players[this.state.playersTurn].totalScore = 0;
    });
    this.setState((pervState) => {
      return pervState.players[this.state.playersTurn].tempScore = 0;
    });
  }

  handelHold() {
    this.state.players.forEach((player) => {
      if (player.totalScore >= this.state.pointsToWin) {
        this.winningMessage(player);
        return;
      }
    })
    this.ChangeTurn();
  }

  winningMessage() {
    this.state.players.forEach((player) => {
      if (player.totalScore >= this.state.pointsToWin) {
        console.log(player.name);
        return;
      }
    })
  }

  resetGame() {
    this.setState((pervState) => {
      for (let i = 0; i < this.state.players; i++) {
        return pervState.players[i].totalScore = 0;
      }
    });
    this.setState((pervState) => {
      for (let i = 0; i < this.state.players; i++) {
        return pervState.players[i].tempScore = 0;
      }
    });
  }


  render() {
    return (
      <div className="flex-container">
        <Player key="0" id="0" totalScore={this.state.players[0].totalScore} tempScore={this.state.players[0].tempScore} playerName={this.state.players[0].name} />
        <div className="columns-container">
          <NewGameButton />
          {this.renderDices()}
          <HoldAndDiceButtons key="0" callback={this.handelDices} text="ROLL DICE" />
          <HoldAndDiceButtons key="1" callback={this.handelHold} text="HOLD" />
        </div>
        <Player key="1" id="1" totalScore={this.state.players[1].totalScore} tempScore={this.state.players[1].tempScore} playerName={this.state.players[1].name} />
      </div>
    )
  }
}