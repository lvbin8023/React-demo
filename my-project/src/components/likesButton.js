import React from 'react'

class LikesButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: 0
    }
  }
  increasLikes() {
    this.setState(likeState => {
      //更改state只能通过setState方法
      return { likes: ++likeState.likes }
    })
  }
  render() {
    return (
      <div className="likesButton">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            this.increasLikes()
          }}
        >
          <span>👍 {this.state.likes}</span>
        </button>
      </div>
    )
  }
}

export default LikesButton
