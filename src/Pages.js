import React from 'react';
import './Pages.css';

import {Icon} from './Icon';

export function Social(){
    return (
        <div className='page'>
            <h2>Social</h2>

            <Icon link="github.com/BaruYogesh" image={require('./icons/github.png')} />
            
        </div>
    )
}

export function About(){
    return (
        <div className='page'>
            <h2>About</h2>

            
        </div>
    )
}

export function Gaming(){
    return <h2>Gaming</h2>
}

export function Home(){
    return(
        <div className='page'>
            <h2>Home</h2>

            <p>Hi, my name is Baru and welcome to my website</p>
        </div>
        
    )


}