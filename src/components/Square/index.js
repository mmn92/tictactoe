import React from 'react';

import { Button, ButtonBold } from './styles';

export const Square = (props) => {
    //let squareId = props.isBold ? "bold-square" : "square";
    if(props.isBold){
        return (
            <ButtonBold onClick={props.onClick}>
                {props.value}
            </ButtonBold>
        );
    } else {
        return (
            <Button onClick={props.onClick}>
                {props.value}
            </Button>
        );
    }
}
