import React from 'react'

class HeaderButton extends React.Component {
    render() {
        return (
            <div className="header-button">
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default HeaderButton