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

class Header extends Component {
  renderGoodWord(goodWord, badWord) {
    const isGoodWord = false
    return isGoodWord ? goodWord : badWord
  }
  render() {
    const word = 'is good'
    const className = 'h2'
    const isSale = false
    const hasName = false
    return (
      <div>
        <h1>
          React小书{word} {1 + 2}{' '}
          {(function() {
            return 'is very good'
          })()}
        </h1>
        <h2 className={className}>Nice book</h2>
        <h3>
          is no sale? {isSale ? <strong>Yes</strong> : <span>Sorry</span>}
        </h3>
        <h3>Yo! {hasName ? <strong>whh</strong> : null}</h3>
        <h4>{this.renderGoodWord('好好学习，天天向上', '玩物丧志')}</h4>
      </div>
    )
  }
}

ReactDOM.render(<Header />, document.getElementById('root'))
