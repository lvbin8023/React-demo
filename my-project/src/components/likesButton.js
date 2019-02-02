import React from 'react';

class likesButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			likes:0
		}
	}
	increasLikes() {
		this.setState({
			likes: ++this.state.likes
		})
	}
	render() {
		return (
			<div className='likesButton'>
				<button type='button' className='btn btn-outline-primary' onClick={() => {this.increasLikes()}}>
					👍 {this.state.likes}
				</button>
			</div>
		)
	}
}

export default likesButton