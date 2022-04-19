import React, { Component } from 'react'

export default class FormBlock extends Component {
	// constructor(props) {
	// 	super(props)
	
	// 	this.state = {
	// 		 readFlag: "readOnly",
	// 		 style: {color: "#0000004D"},
	// 	}
	// }
	render() {
		if (!this.props.cnt)
				return (
					<div className="input-block">
						<label>{this.props.label}</label><br />
						<input type="text" defaultValue={this.props.value} readOnly style={{color: "#0000004D"}}/>
					</div>
				);
		else
			return (
				<div className="input-block">
					<label>{this.props.label}</label><br />
					<input type="text" defaultValue={this.props.value}/>
				</div>
			)
	}
}
