import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList'
const tags = ['HTML','CSS','JavaScript','Bootstrap','jQuery','Vue','React'];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this is first reply','this is 2nd reply']
    }
  }
  onAddComment(comment) {
    this.setState({
      comments:[...this.state.comments,comment]
    })
  }
  render() {
    const {comments} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <DigitalClock />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Here's a simple page built using React.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <LikesButton />
          <NameCard name='lvbin/吕彬' professional='前端工程师' number='18516769029' tags={tags}/>
          <CommentList comments={comments} />
          <CommentBox commentsLength={comments.length} onAddComment={(comment)=>{this.onAddComment(comment)}} />
        </header>
      </div>
    );
  }
}

export default App;
