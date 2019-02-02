import React from 'react';

class CommentBox extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			value: ''
		}
	}
	handleChange(event) {
		this.setState({
			value: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		alert(this.state.value)
		this.setState({
			value: ''
		})
	}
	render() {
		return (
			<form className='p-5' onSubmit={(event)=>{this.handleSubmit(event)}}>
				<div className='form-group'>
					<label>留言内容</label>
					<input type='text' className='form-control' placeholder='请输入内容' onChange={(event)=>{this.handleChange(event)}} value={this.state.value} />
				</div>
				<button type='submit' className='btn btn-primary'>留言</button>
			</form>
		)
	}
}

export default CommentBox