import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
class Clock extends Component {
  constructor() {
    super()
    this.state = { date: new Date() }
  }
  componentWillMount() {
    this.time = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }
  componentWillUnmount() {
    clearTimeout(this.time)
  }
  render() {
    return (
      <div>
        <h1>
          <p>现在时间是</p>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}

class AutoFocusInput extends Component {
  componentDidMount() {
    this.input.focus()
  }
  render() {
    return <input ref={input => (this.input = input)} />
  }
}
class Index extends Component {
  constructor() {
    super()
    this.state = { isShowClock: true }
  }

  handleShowOrHide() {
    this.setState({ isShowClock: !this.state.isShowClock })
  }

  render() {
    return (
      <div>
        {this.state.isShowClock ? <Clock /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或隐藏时钟
        </button>
        <AutoFocusInput />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
