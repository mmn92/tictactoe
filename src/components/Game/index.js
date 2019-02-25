import React from 'react';
import logo from '../../img/tictactoe3.png';
import { GameDiv, GameInfo } from './styles';
import Board from '../Board/index';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        history: [{
            squares: Array(9).fill(null)
        }],
        xIsNext: true,
        stepNumber: 0
        };
    }

    jumpTo(step){
        this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
        });
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if(calculateWinner(squares) || squares[i]){
        return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
        history: history.concat([{
            squares: squares
        }]),
        xIsNext: !this.state.xIsNext,
        stepNumber: history.length
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
            <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
            </li>
        );
        });

        let status;
        if(winner){
        status = 'Winner: ' + current.squares[winner[0]];
        } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
        <div>
            <img className="logo" alt="tictactoe" src={logo}/>         
            <GameDiv>
                <div className="game-board">
                    <Board 
                    squares={current.squares}
                    onClick={(i) => this.handleClick(i)}
                    winner={winner}
                    />
                </div>
                <GameInfo>
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </GameInfo>
            </GameDiv>
        </div>
        );
    }
}

function calculateWinner(squares){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for (let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return lines[i];
        }
    }
    return null;
}

export default Game;