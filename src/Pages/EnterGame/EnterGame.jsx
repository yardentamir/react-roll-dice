import React from 'react';
import DiceGame from '../DiceGame/DiceGame';
import TopPointsInput from '../../Components/TopPointsInput/TopPointsInput';
import Button from '../../Components/HoldAndDiceButtons/HoldAndDiceButtons';

export default class EnterGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxPoints: 100, name0: '', name1: ''
    }
    this.saveToStorage = this.saveToStorage.bind(this);
  }

  renderNameInputs() {
    const arrOfInputComponents = [];
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


  render() {
    return (
      <>
        <div>
          <div>
            {this.renderNameInputs()}
          </div>
          <TopPointsInput key="3" id="maxPoints" callBack={this.saveToStorage} text="Put Target Points" />
          <Button text="start" />
        </div>

        <DiceGame />

      </>

    )
  }
}