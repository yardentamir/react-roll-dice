import React from 'react';
import DiceGame from '../DiceGame/DiceGame';
import TopPointsInput from '../../Components/TopPointsInput/TopPointsInput';
import Button from '../../Components/HoldAndDiceButtons/HoldAndDiceButtons';

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
    console.log(sessionStorage.getItem('name1'));
    sessionStorage.getItem('name1') || sessionStorage.setItem('name0', "Player 1")
    sessionStorage.getItem('name1') || sessionStorage.setItem('name1', "Player 2")
    sessionStorage.getItem('maxPoints') || sessionStorage.setItem('maxPoints', 100)
    for (let i = 0; i < 2; i++) {
      arrOfInputComponents[i] = <TopPointsInput key={i} id={`name${i}`} value={this.state[`name${i}`]} callBack={this.saveToStorage} text={`Player ${i + 1} Name:`} />
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
            <TopPointsInput key="3" id="maxPoints" callBack={this.saveToStorage} text="Put Target Points" value={this.state.maxPoints} />
            <Button text="start" callback={this.handelStartClick} />
          </div>
        }
      </>

    )
  }
}