import React from 'react';
import './_card.scss';

const Card = (props) => {
    return (
        <div className={`card ${props.color == null ? '' : props.color} ${props.border == null ? '' : props.border}`}>
            <div>{props.icon}</div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
           {props.children}
        </div>
    )
};

export default Card;