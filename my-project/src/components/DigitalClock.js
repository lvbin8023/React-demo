import React from 'react';

class DigitalClock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			date: new Date()
		}
	}
	//组件的生命周期构造函数，分为三类：初始化componentDidMount，更新componentDidUpdate，卸载componentWillUnmount
	componentDidMount() {
		this.timer = setInterval(() => {
			this.setState({
				date: new Date()
			})
		},1000)
	}
	// componentDidUpdate(currentProps,currentState) {
	// 	console.log(currentState)
	// }
	componentWillUnmount() {
		clearInterval(this.timer)
	}
	render() {
		return (
			<div className='digitalClock'>
				<h1>{this.state.date.toLocaleTimeString()}</h1>
			</div>
		)
	}
}

export default DigitalClock