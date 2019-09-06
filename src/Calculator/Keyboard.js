import React from 'react'
import { Button } from './Button'

const layout = [
    '7',
    '8',
    '9',
    '÷',
    '4',
    '5',
    '6',
    'x',
    '1',
    '2',
    '3',
    '-',
    'c',
    '0',
    '.',
    '+',
]

export class Keyboard extends React.Component {
    constructor(props) {
        super(props)
        this.inputNumber = this.inputNumber.bind(this)
        this.state = {
            action: null,
            addDot: false
        }
    }
    interpretKey = async (event) => {
        this.interpretSymbol(event.key)
    }
    onKeyboardPress = (event) => {
        this.interpretSymbol(event.target.getAttribute('value'))
    }
    interpretSymbol = (key) => {
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
            case 'x':
                this.addAction(this.multiply)
                break
            case '/':
            case '÷':
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
        return (
            <div className="Calculator-keyboard" onClick={this.onKeyboardPress}>
                {
                    layout.map((symbol) => 
                        <div className="Calculator-button" key={symbol} value={symbol}>{symbol}</div>
                    )
                }
            </div>
        )
    }
}
