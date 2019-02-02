import React from 'react';

//第一种方法，受控组件，比较严谨，推荐使用
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
		this.props.onAddComment(this.state.value)
		this.setState({
			value: ''
		})
	}
	render() {
		const {commentsLength} = this.props
		return (
			<form className='p-5 commentBox' onSubmit={(event)=>{this.handleSubmit(event)}}>
				<div className='form-group'>
					<label>留言内容</label>
					<input type='text' className='form-control' placeholder='请输入内容' onChange={(event)=>{this.handleChange(event)}} value={this.state.value} />
				</div>
				<button type='submit' className='btn btn-primary'>留言</button>
				<p>已有{commentsLength}条评论</p>
			</form>
		)
	}
}

/// 第二种方法，非受控组件，比较随性，是form表单的替代方法，可以减少代码量
// class CommentBox extends React.Component {
// 	constructor(props) {
// 		super(props)
// 	}
// 	handleSubmit(event) {
// 		event.preventDefault()
// 		alert(this.textInput.value)
// 	}
// 	render() {
// 		return (
// 			<form className='p-5' onSubmit={(event)=>{this.handleSubmit(event)}}>
// 				<div className='form-group'>
// 					<label>留言内容</label>
// 					<input type='text' className='form-control' placeholder='请输入内容' ref={(textInput)=>{this.textInput = textInput}} />
// 				</div>
// 				<button type='submit' className='btn btn-primary'>留言</button>
// 			</form>
// 		)
// 	}
// }

export default CommentBox