import React from 'react'

export class Screen extends React.Component {
    constructor(props) {
        super(props)
        this.copyResult = this.copyResult.bind(this)
    }
    copyResult() {
        const copyText = this.refs.screen

        copyText.select();
        copyText.setSelectionRange(0, 99999)

        document.execCommand('copy')

    }
    render() {
        return (
            <input 
            readOnly
            ref="screen" 
            className="Calculator-screen" 
            value={this.props.result}
            onClick={this.copyResult}>   
            </input>
        )
    }
}
