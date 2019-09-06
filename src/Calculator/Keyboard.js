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
    interpretKey = ({ key }) => {
        switch (key) {
            case '1': 
            case '2': 
            case '3': 
            case '4': 
            case '5': 
            case '6': 
            case '7': 
            case '8': 
            case '9': 
            case '0': 
                this.inputNumber(key)
                break
            case '.':
                this.addDot()
                break
            case '+':
                this.addAction(this.add)
                break
            case '-':
                this.addAction(this.minus)
                break
            case '*':
                this.addAction(this.multiply)
                break
            case '/':
                this.addAction(this.divide)
                break
            case 'c':
            case 'Escape':
                this.clearCalculator()
                break
            case 'Backspace':
                this.backSpace()
                break
            case 'Enter':
                this.addAction(null)
                break
            default:
        }
    }
    componentDidMount() {
        document.addEventListener('keydown', this.interpretKey) 
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.interpretKey)
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
    backSpace = () => {
        if (this.props.newNumber == null) {
            return;
        }
        const newNumber = this.props.newNumber.toString().slice(0, -1)
        this.props.setNewNumber(newNumber === '' ? null : newNumber)
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
    multiply = () => {
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
                    fn: () => this.addAction(this.multiply)
                },
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
