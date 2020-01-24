import React, { Component } from "react";
import Game from "./components/Game/Game";
import GameOver from "./components/GameOver/GameOver";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "active",
      winner: null,
      whiteScore: 0,
      blackScore: 0,
      intro: true
    };
  }

  render() {
    const startGame = () => {
      this.setState({ intro: false });
    };
    if (this.state.intro) {
      return (
        <div className="intro">
          <div className="intro-container">
            <h1> Othello</h1>
            <button id="game" onClick={startGame}>
              {" "}
              PLAY{" "}
            </button>
          </div>

        </div>
      );
    }


    let game =
      this.state.status === "active" ? (
        <Game end={this.endGame.bind(this)} />
      ) : (
        ""
      );

    let gameOver =
      this.state.status === "over" ? (
        <GameOver
          winner={this.state.winner}
          restart={this.restartGame.bind(this)}
          white={this.state.whiteScore}
          black={this.state.blackScore}
        />
      ) : ("");

      const infobtnClicked = () => {
        document.querySelector('.modal').style.display = "block";
      }

      const closebtnClicked = () => {
        document.querySelector('.modal').style.display = "none";
      }

      // Music playing...
    return (
      <div className="App">
        <audio
          src="/audioclips/Vivaldi.mp3"
          controls
          autoPlay
          hidden
          className="music"
        />
        {game}

        {/* Modal Pop-up Window */}

        <button className='infobtn' onClick={infobtnClicked}>How to Play</button>


        <div className='modal'>
          <div className='modal-content'>
            <button class="close" onClick={closebtnClicked}>&times;</button>
            <p>Instructions</p>
          </div>
        </div>

        {gameOver}
      </div>


    );


  }



  restartGame() {
    this.setState({
      status: "active"
    });
  }
  endGame(winner, whiteScore, blackScore) {
    this.setState({
      status: "over",
      winner,
      whiteScore,
      blackScore
    });
  }
}
export default App;
