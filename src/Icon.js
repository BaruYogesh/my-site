import React from 'react';

export function Icon(){
    return (
        <div className='icon'>
            <a href={this.props.link}>
                <img src={this.props.image} alt="icon"/>
            </a>
        </div>
    )
}