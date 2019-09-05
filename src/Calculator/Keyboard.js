import React from 'react'
import { Button } from './Button'

export class Keyboard extends React.Component {
    constructor(props) {
        super(props)
        this.inputNumber = this.inputNumber.bind(this)
        this.state = {
            action: null,
            addDot: false
        }
    }
    inputNumber(num) {
        let number = 0;
        const { newNumber } = this.props

        if (this.state.addDot) {
            num = '.' + num
            this.setState({
                addDot: false
            })
        }
        if (newNumber === null) {
            number = num;
        } else {
            number = newNumber + num.toString() 
        }
        this.props.setNewNumber(Number.parseFloat(number))
    }
    clearCalculator = () => {
        this.props.setNewNumber(null)
        this.props.setOldNumber(0)
        this.setState({
            action: null
        })
    }
    addAction = (action) => {
        if (this.props.newNumber !== null) {
            let result = this.props.newNumber
            if (this.state.action) {
                result = this.state.action();
            }
            this.props.setNewNumber(null)
            this.props.setOldNumber(Number.parseFloat(Number.parseFloat(result).toFixed(10))) 
        }
        this.setState({
            action
        })
    }
    addDot = () => {
        this.setState({
            addDot: true
        })
    }
    divide = () => {
        return this.props.oldNumber / this.props.newNumber
    }
    multiple = () => {
        return this.props.oldNumber * this.props.newNumber
    }
    minus = () => {
        return this.props.oldNumber - this.props.newNumber
    }
    add = () => {
        return this.props.oldNumber + this.props.newNumber
    }
    render() {
        const layout = [
            [
                {
                    symbol: 1,
                    fn: () => this.inputNumber(1)
                },
                {
                    symbol: 2,
                    fn: () => this.inputNumber(2)
                },
                {
                    symbol: 3,
                    fn: () => this.inputNumber(3)
                },
                {
                    symbol: '÷',
                    fn: () => this.addAction(this.divide)
                },
                {
                    symbol: 4,
                    fn: () => this.inputNumber(4)
                },
                {
                    symbol: 5,
                    fn: () => this.inputNumber(5)
                },
                {
                    symbol: 6,
                    fn: () => this.inputNumber(6)
                },
                {
                    symbol: 'x',
                    fn: () => this.addAction(this.multiple)
                },
                {
                    symbol: 7,
                    fn: () => this.inputNumber(7)
                },
                {
                    symbol: 8,
                    fn: () => this.inputNumber(8)
                },
                {
                    symbol: 9,
                    fn: () => this.inputNumber(9)
                },
                {
                    symbol: '-',
                    fn: () => this.addAction(this.minus)
                },
                {
                    symbol: 'c',
                    fn: this.clearCalculator
                },
                {
                    symbol: 0,
                    fn: () => this.inputNumber(0)
                },
                {
                    symbol: '.',
                    fn: this.addDot
                },
                {
                    symbol: '+',
                    fn: () => this.addAction(this.add)
                },
            ]
        ]
        return (
            <div className="Calculator-keyboard">
                {
                    layout.map((row) => 
                        row.map(({ fn, symbol }) => 
                            <Button key={symbol} onClick={fn}>{symbol}</Button>
                        )
                    )
                }
            </div>
        )
    }
}
