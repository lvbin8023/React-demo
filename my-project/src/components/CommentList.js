import React from 'react';

//函数的写法，没有生命周期，没有state可以这样写
const CommentList = ({comments}) => {
	return (
		<div className='commentList'>
			<label>评论列表</label>
			<ul className='list-group mb-3'>
				{
					comments.map((comment,index)=>
						<li key={index} className='list-group-item'>{comment}</li>
					)
				}
			</ul>
		</div>
	)
}

/// class CommentList extends React.Component {
// 	render() {
// 		return (

// 		)
// 	}
// }

export default CommentList