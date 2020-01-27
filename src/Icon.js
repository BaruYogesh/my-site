import React from 'react';

export function Icon(props){
    return (
        <div className='icon'>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img src={props.image} alt="icon"/>
            </a>
        </div>
    )
}