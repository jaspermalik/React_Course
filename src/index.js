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
class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">{this.props.children}</div>
      </div>
    )
  }
}

ReactDOM.render(
  <Card>
    <h2>React.js 小书</h2>
    <div>开源、免费、专业、简单</div>
    订阅：
    <input />
  </Card>,
  document.getElementById('root')
)
