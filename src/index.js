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
class Editor extends Component {
  constructor() {
    super()
    this.state = {
      content: '<h1>React.js 小书</h1>',
      color: 'red'
    }
  }

  changeColor() {
    this.setState({ color: 'royalblue' })
  }

  render() {
    return (
      <div
        style={{ fontSize: '12px', color: this.state.color }}
        className="editor-wrapper"
        dangerouslySetInnerHTML={{ __html: this.state.content }}
        onClick={this.changeColor.bind(this)}
      ></div>
    )
  }
}

ReactDOM.render(<Editor />, document.getElementById('root'))
