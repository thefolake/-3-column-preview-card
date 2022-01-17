import React from 'react';
import './_button.scss'

const Button = (props) => {
    return (
        <button className={`button ${props.color === null ? '' : props.color}`}>{props.children}</button>
    );
};

export default Button;