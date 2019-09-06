import React from 'react'

export class Button extends React.Component {
    render() {
        return (
            <div className="Calculator-button" onClick={this.props.onClick}>
                {this.props.children}
            </div>
        )
    }
}
