import React from 'react'
import { HeaderButton } from './HeaderButton'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <HeaderButton title='smile' />
            </div>
        )
    }
}