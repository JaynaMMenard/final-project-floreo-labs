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
          src="/audioclips/Jazz.mp3"
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
            <p><h3><b>Start of the game</b></h3>The game is started in the position shown below on a board consisting of 64 squares in an 8x8 grid.</p>
            <p><h3><b>Basic rules</b></h3>Each reversi disk has a black side and a white side. On your turn, you place one piece on the board with your color facing up. You must place the piece so that an opponent's piece, or a row of opponent's pieces, is flanked by your pieces. All of the opponent's pieces between your pieces are then turned over to become your color.</p>
            <p><h3><b>Aim of the game</b></h3>The object of the game is to own more pieces than your opponent when the game is over. The game is over when neither player has a move. Usually, this means the board is full. </p>
            <p><h3><b>Playing the game</b></h3>A move consists of placing one piece on an empty square.</p>
            <p><h4><b>Capture:</b></h4>You can capture vertical, horizontal, and diagonal rows of pieces. Also, you can capture more than one row at once.</p>
            <p><h3><b>End of the game</b></h3>The game ends when:
            <p>•One player wins, by making his color dominant on the board.</p>
	          <p>•The players agree to finish the game (as a resignation, or a draw).</p>

            </p>
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
