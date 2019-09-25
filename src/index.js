import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import PropTypes from 'prop-types'
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  }

  render() {
    const { comment } = this.props
    return (
      <div className="comment">
        <div className="comment-user">
          <span>{comment.username}</span>
        </div>
        <p>{comment.content}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <Comment comment={{ username: 'whh', content: 'Rich Men' }} />,
  document.getElementById('root')
)
