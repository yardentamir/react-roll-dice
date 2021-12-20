import React from 'react';
import DiceGame from '../DiceGame/DiceGame';
import TextInputs from '../../Components/CostumeInput/CostumeInput';
import Buttons from '../../Components/Buttons/Buttons';
import "./EnterGame.scss"

export default class EnterGame extends React.Component {
  constructor() {
    super();
    this.state = {
      maxPoints: sessionStorage.getItem('maxPoints') || 100, name0: sessionStorage.getItem('name0') || 'Player 1', name1: sessionStorage.getItem('name1') || 'Player 2', startGame: false
    }
    this.saveToStorage = this.saveToStorage.bind(this);
    this.handelStartClick = this.handelStartClick.bind(this);
  }

  renderNameInputs() {
    const arrOfInputComponents = [];
    for (let i = 0; i < 2; i++) {
      arrOfInputComponents[i] = <TextInputs type="text" key={i} id={`name${i}`} value={this.state[`name${i}`]} callBack={this.saveToStorage} text={`Player ${i + 1} Name:`} />
    }
    return arrOfInputComponents;
  }

  saveToStorage(event) {
    const { id, value } = event.target;
    sessionStorage.setItem(id, value);
    this.setState((pervState) => {
      return { ...pervState, [id]: value };
    });
  }

  handelStartClick() {
    this.setState((pervState) => {
      return { ...pervState, startGame: true };
    });
  }



  render() {
    return (
      <>
        {this.state.startGame ? <DiceGame /> :
          <div className="main-container-opening">
            <div className="container-opening">
              <img className="opening-img display-desktop" src="/assets/images/cubes.JPG" alt="cubes" />
              <div className="container-text">
                <h2>ROll DICE GAME</h2>
                <p>instructions: You need to get to the Points Target first to win. Try to avoid Doubles.</p>
                <div>
                  {this.renderNameInputs()}
                </div>
                <TextInputs key="3" type="number" id="maxPoints" callBack={this.saveToStorage} text="Target Points:" value={this.state.maxPoints} />
                <Buttons id="startGame" key="startGame" text="START GAME" callback={this.handelStartClick} />
              </div>
            </div>
          </div>
        }
      </>

    )
  }
}