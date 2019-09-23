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

class LikeButton extends Component {
  constructor() {
    super()
    this.state = { name: 'whh', isLiked: false }
  }
  handleClickOnLikeButton() {
    /* console.log(this.state.isLiked)
    this.setState({ isLiked: !this.state.isLiked })
    console.log(this.state.isLiked) */
    this.setState(prevState => {
      return { count: 0 }
    })
    this.setState(prevState => {
      return { count: prevState.count + 1 }
    })
    this.setState(prevState => {
      return { count: prevState.count + 2 }
    })
  }
  render() {
    return (
      <div>
        <i>{this.state.name}点了</i>
        <button onClick={this.handleClickOnLikeButton.bind(this)}>
          {this.state.isLiked ? '取消' : '点赞'}👍
        </button>
        <div>{this.state.count}</div>
      </div>
    )
  }
}
class Title extends Component {
  handleClickOnTitle(word, e) {
    console.log(e.target.innerHTML)
    console.log(this)
    console.log(word)
  }
  render() {
    return (
      <h1 onClick={this.handleClickOnTitle.bind(this, 'Hello')}>React 小书</h1>
    )
  }
}
class Header extends Component {
  render() {
    return (
      <div>
        <Title />
        <h2>This is Header</h2>
      </div>
    )
  }
}

class Main extends Component {
  render() {
    return (
      <div>
        <h2>This is main content</h2>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <h2>This is footer</h2>
      </div>
    )
  }
}

class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <LikeButton />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
