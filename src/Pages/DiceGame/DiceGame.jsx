import React, { Component } from "react";
import "./dicegame.scss";
import Buttons from "../../Components/Buttons/Buttons";
import Player from "../../Components/player/Player";
import Dice from "../../Components/Dice/Dice";
import WinningMessage from "../../Components/WinnerMessage/WinnerMessage";


export default class DiceGame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      winner: -1,
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
      ],
    }
    this.handelDices = this.handelDices.bind(this);
    this.handelHold = this.handelHold.bind(this);
    this.dicesArr = ["", ""];
  }

  handelDices() {
    for (let i = 0; i < this.dicesArr.length; i++) {
      this.dicesArr[i] = Math.floor(Math.random() * 6) + 1;
    }
    console.log(this.dicesArr);
    if (this.dicesArr[0] === this.dicesArr[1]) {
      this.resetCurrentPlayerValues();
      this.ChangeTurn();
    } else {
      this.totalScorePlayer(this.tempScorePlayer());
    }
  }

  renderDices() {
    return this.dicesArr.map((dice, i) => {
      if (dice !== "") {
        return <Dice key={i} value={dice} />
      }
      return "";
    })
  }

  ChangeTurn() {
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
    this.state.players.forEach((player, index) => {
      if (player.totalScore >= sessionStorage.getItem("maxPoints")) {
        this.setState((pervState) => {
          return { ...pervState, winner: index };
        });
        return;
      }
    })
    this.ChangeTurn();
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
      <>
        <div className="flex-container">
          <Player key={0} id={0} className="player-div" totalScore={this.state.players[0].totalScore} playerTurn={this.state.playersTurn} tempScore={this.state.players[0].tempScore} playerName={sessionStorage.getItem('name0')} />
          <div className="columns-container">
            <div className="button-group">
              <Buttons text="NEW GAME" />
              <Buttons text="BACK" />
            </div>
            <div>
              {this.renderDices()}
            </div>
            <div className="button-group">
              <Buttons key={0} callback={this.handelDices} text="ROLL DICE" />
              <Buttons key={1} callback={this.handelHold} text="HOLD" />
            </div>
          </div>
          <Player key={1} id={1} className="player-div" totalScore={this.state.players[1].totalScore} playerTurn={this.state.playersTurn} tempScore={this.state.players[1].tempScore} playerName={sessionStorage.getItem('name1')} />
        </div>
        {this.state.winner > -1 && <WinningMessage winnerId={this.state.winner} winnerName={sessionStorage.getItem(`name${this.state.winner}`)} />}
      </>
    )
  }
}