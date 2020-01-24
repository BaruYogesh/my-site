import React from 'react'
import HeaderButton from './HeaderButton'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <HeaderButton title='Home' />
                <HeaderButton title='About' /> 
                <HeaderButton title='Social' />
            </div>
        )
    }
}

export default Header