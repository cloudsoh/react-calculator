import React from 'react'
import { Screen } from './Screen'
import { Keyboard } from './Keyboard'

export class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newNumber: null,
            oldNumber: 0
        }
        this.setNewNumber = this.setNewNumber.bind(this)
        this.setOldNumber = this.setOldNumber.bind(this)
    }
    setNewNumber(newNumber) {
        this.setState({ newNumber })
    }
    setOldNumber(oldNumber) {
        this.setState({ oldNumber })
    }
    render() {
        const { oldNumber, newNumber } = this.state
        const displayNumber = newNumber === null ? oldNumber : newNumber
        return (
            <div className="Calculator">
                <Screen result={displayNumber}></Screen>
                <Keyboard 
                    newNumber={this.state.newNumber}
                    oldNumber={this.state.oldNumber}
                    setNewNumber={this.setNewNumber}
                    setOldNumber={this.setOldNumber}
                    >
                    </Keyboard>
            </div>
        )
    }
}
