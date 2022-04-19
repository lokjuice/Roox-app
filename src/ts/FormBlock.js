import React, { Component } from 'react'

export default class FormBlock extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			value: this.props.value,
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			value: event.target.value,
		})
	}
	render() {
		if (!this.props.cnt) { 	// Недоступно для редактировния
			if (this.props.type)	// Блок комментария (textarea)
				return (
					<div className="input-block">
						<label>{this.props.label}</label><br />
						<textarea type="text" value={this.state.value} readOnly style={{color: "#0000004D"}} onChange={this.handleChange}/>
					</div>
				);
			else
				return (
					<div className="input-block">
						<label>{this.props.label}</label><br />
						<input type="text" value={this.state.value} readOnly style={{color: "#0000004D"}} onChange={this.handleChange} required/>
					</div>
				);
		}
		else {	// Доступно для редактирования
			if (this.props.type) // Блок комментария (textarea)
				return (
					<div className="input-block">
						<label>{this.props.label}</label><br />
						<textarea type="text" value={this.state.value} onChange={this.handleChange}/>
					</div>
				);
			else
				return (
					<div className="input-block">
						<label>{this.props.label}</label><br />
						<input type="text" value={this.state.value} onChange={this.handleChange} required/>
					</div>
				)
		}
	}
}
