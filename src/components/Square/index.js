import React from 'react';

function Square(props){
    let squareId = props.isBold ? "bold-square" : "square";
    return (
        <button className={squareId} onClick={props.onClick}>
            {props.value}
        </button>
    );
}