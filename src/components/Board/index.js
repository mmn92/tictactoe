import React from 'react';
import { Square } from '../Square';
import { BoardRow } from './styles';

class Board extends React.Component {

    renderSquare(i) {
        let isBold = false;
        if (this.props.winner){
            isBold = (this.props.winner.indexOf(i) >= 0) ? true : false;
        }
        return (<Square value={this.props.squares[i]}
                        onClick={ () => this.props.onClick(i) }
                        isBold={isBold}
            />);
    }

    render() {  
        return (
        <div>
            <BoardRow>
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </BoardRow>
            <BoardRow>
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </BoardRow>
            <BoardRow>
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </BoardRow>
        </div>
        );
    }
}

export default Board;