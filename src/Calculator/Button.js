import React from 'react'

export class Button extends React.Component {
    render() {
        return (
            <button className="Calculator-button" onClick={this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}
