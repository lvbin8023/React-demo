import React from 'react';

//函数的写法，没有生命周期，没有state可以这样写
const NameCard = (props) => {
	const { name, professional, number, tags } = props;
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

//类的写法
// class NameCard extends React.Component {
// 	render() {
// 		const {name,professional,number,tags} = this.props;
// 		return (
// 			<div className='alert alert-success NameCard'>
// 				<h4 className='alert-heading'>{name}</h4>
// 				<ul>
// 					<li>职业：{professional}</li>
// 					<li>电话：{number}</li>
// 					<hr/>
// 					<p>
// 						{
// 							tags.map((tag,index) => (<span className='badge badge-pill' key={index}>{tag}</span>))
// 						}
// 					</p>
// 				</ul>
// 			</div>
// 		)
// 	}
// }

export default NameCard