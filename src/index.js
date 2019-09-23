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
  static defaultProps = {
    likedText: '取消',
    unlikedText: '点赞'
  }
  constructor() {
    super()
    this.state = { isLiked: false }
  }
  handleClickOnLikeButton() {
    this.setState({ isLiked: !this.state.isLiked })
    if (this.props.onClick) {
      this.props.onClick()
    }
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClickOnLikeButton.bind(this)}>
          {this.state.isLiked ? this.props.likedText : this.props.unlikedText}👍
        </button>
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
  constructor() {
    super()
    this.state = {
      likedText: '取消',
      unlikedText: '点赞'
    }
  }
  handleClickOnChange() {
    this.setState({
      likedText: '❌',
      unlikedText: '☑️'
    })
  }
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
        <LikeButton
          likedText="已赞"
          unlikedText="赞"
          onClick={() => {
            console.log('Click on like button')
          }}
        />
        <LikeButton
          likedText={this.state.likedText}
          unlikedText={this.state.unlikedText}
        />
        <button onClick={this.handleClickOnChange.bind(this)}>
          修改wording
        </button>
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'))
