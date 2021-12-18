import React, { Component } from "react";
import "./dicegame.scss";
import Buttons from "../../Components/Buttons/Buttons";
import Player from "../../Components/player/Player";
import Dice from "../../Components/Dice/Dice";
import WinningMessage from "../../Components/WinnerMessage/WinnerMessage";
import EnterGame from "../EnterGame/EnterGame"


export default class DiceGame extends Component {

  constructor(props) {
    super(props);
    this.state = {
      back: false,
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
    this.resetGame = this.resetGame.bind(this);
    this.backToEnterGame = this.backToEnterGame.bind(this);
    this.dicesArr = ["Roll", "Dice"];
  }

  handelDices() {
    for (let i = 0; i < this.dicesArr.length; i++) {
      this.dicesArr[i] = Math.floor(Math.random() * 6) + 1;
    }
    if (this.dicesArr[0] === this.dicesArr[1]) {
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
    this.setState(
      {
        back: false,
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
    )
    this.dicesArr = ["Roll", "Dice"];

  }

  backToEnterGame() {
    this.resetGame();
    this.setState({ back: true });
  }


  render() {
    return (
      <>
        {this.state.back ? <EnterGame /> :
          <div className="flex-container">
            <Player key={0} id={0} className="player-div" totalScore={this.state.players[0].totalScore} playerTurn={this.state.playersTurn} tempScore={this.state.players[0].tempScore} playerName={sessionStorage.getItem('name0')} />
            <div className="columns-container">
              <div>
                <h2 className="points-to-win">Points To Win: {sessionStorage.getItem('maxPoints')}</h2>
                <div className="button-group">
                  <Buttons text="NEW GAME" callback={this.resetGame} />
                  <Buttons text="BACK" callback={this.backToEnterGame} />
                </div>
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
        }
        {this.state.winner > -1 && <WinningMessage winnerName={sessionStorage.getItem(`name${this.state.winner}`)} newGameCallback={this.resetGame} backToEnterGameCallback={this.backToEnterGame} />}
      </>

    )
  }
}