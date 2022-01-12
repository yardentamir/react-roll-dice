#  Roll Dice Game

React classes project

## PROJECT LINK

[Roll Dice Game](https://yarden-tamir-roll-dice-game.netlify.app)

## PAGES

### game setting

players names and target score using local storage to save the data between pages.

### game

instructions: You need to get to the Points Target first to win. Try to avoid Doubles.

navigate between pages: moving between pages was implemented with a Ternary operator becouse The project was written at the time when we still didn't learn routing.

### main game state

back: to navigate between the two pages
winner: stores the player array index
playersTurn: stores the player array index that has the turn
players: array of players that contains the total score and the temp score
dicesArr: stores the dice results
*playes names and target score is already saved in the local storage

```
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
    this.dicesArr = ["Roll", "Dice"];
  ```
### design
I used pure css to design the components and the layouts.
