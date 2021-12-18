import React from 'react';
import DiceGame from '../DiceGame/DiceGame';
import TextInputs from '../../Components/TextInputs/TextInputs';
import Buttons from '../../Components/Buttons/Buttons';

export default class EnterGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxPoints: 100, name0: sessionStorage.getItem('name0') || 'Player 1', name1: sessionStorage.getItem('name1') || 'Player 2', startGame: false
    }
    this.saveToStorage = this.saveToStorage.bind(this);
    this.handelStartClick = this.handelStartClick.bind(this);
  }

  renderNameInputs() {
    const arrOfInputComponents = [];
    sessionStorage.getItem('name1') || sessionStorage.setItem('name0', "Player 1")
    sessionStorage.getItem('name1') || sessionStorage.setItem('name1', "Player 2")
    sessionStorage.getItem('maxPoints') || sessionStorage.setItem('maxPoints', 100)
    for (let i = 0; i < 2; i++) {
      arrOfInputComponents[i] = <TextInputs key={i} id={`name${i}`} value={this.state[`name${i}`]} callBack={this.saveToStorage} text={`Player ${i + 1} Name:`} />
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
          <div>
            <div>
              {this.renderNameInputs()}
            </div>
            <TextInputs key="3" id="maxPoints" callBack={this.saveToStorage} text="Put Target Points" value={this.state.maxPoints} />
            <Buttons text="start" callback={this.handelStartClick} />
          </div>
        }
      </>

    )
  }
}