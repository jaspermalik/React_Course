import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import wrapWithLoadData from './wrapWithLoadData'
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

class InputWithUserName extends Component {
  render() {
    return <input value={this.props.data} />
  }
}

class TextareaWithContent extends Component {
  render() {
    return <textarea value={this.props.data} />
  }
}

TextareaWithContent = wrapWithLoadData(TextareaWithContent, 'content')

InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')

class Index extends Component {
  render() {
    return (
      <div>
        <InputWithUserName />
        <TextareaWithContent />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
