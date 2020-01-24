import React from 'react'
import './Header.css'

class HeaderButton extends React.Component { 
    constructor(props){
        super(props)
        this.handleEnter = this.handleEnter.bind(this)
        this.handleLeave = this.handleLeave.bind(this)
        
        this.state = {
            bold: false
        }
    }
    render() {
        let className = 'header-button '
        if(this.state.bold){
            className += 'hover '
        }
        return (
            <div className={className} >
                <p onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>  {this.props.title}</p>
                
            </div>
        )
        
    }
    handleEnter(){
        this.setState({
            bold: true
        })
    }

    handleLeave(){
        this.setState({
            bold: false
        })
    }
}

export default HeaderButton