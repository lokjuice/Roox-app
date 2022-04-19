import React, { Component } from 'react'

export default class FormBlock extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 label: "",
		}
	}
	render() {
		return (
			<div className="input-block">
				<label>{this.props.label}</label><br />
				<input type="text" defaultValue={this.props.value} />
			</div>
		)
	}
}
