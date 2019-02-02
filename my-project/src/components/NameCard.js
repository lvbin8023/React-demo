import React from 'react';

class NameCard extends React.Component {
	render() {
		const {name,professional,number,tags} = this.props;
		return (
			<div className='alert alert-success NameCard'>
				<h4 className='alert-heading'>{name}</h4>
				<ul>
					<li>职业：{professional}</li>
					<li>电话：{number}</li>
					<hr/>
					<p>
						{
							tags.map((tag,index) => (<span className='badge badge-pill' key={index}>{tag}</span>))
						}
					</p>
				</ul>
			</div>
		)
	}
}

export default NameCard