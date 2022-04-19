import React, { Component } from 'react'

export default class LeftPanel extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 data: props.data,
			 byCity: props.byCity,
			 byCompany: props.byCompany,
		}
	}
	render() {
		return (
			<div className="left-block">
				<h2>Сортировка</h2>
				<div className="buttons">
					<p><button onClick={() => {this.props.updateData(false, true)}}>По городу</button></p>
					<p><button onClick={() => {this.props.updateData(true, false)}}>По компании</button></p>
				</div>
			</div>
		)
	}
}
