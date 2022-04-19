import React, { Component } from 'react'
import FormBlock from './FormBlock';

export default class BlockProfile extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 editFlag: 0,
			 btnColor: "#AFAFAF",
			 btnFlag: "disabled",
		}
		this.editFlagChange = this.editFlagChange.bind(this);
		this.formCheck = this.formCheck.bind(this);
	}
	editFlagChange() {
		this.setState({
			editFlag: 1,
			btnColor: "#52CF4F",
			btnFlag: "",
		});
	}
	formCheck(event) {
		console.log(event.target);
		event.preventDefault();
	}
	render() {
		const { data } = this.props;
		const cnt = this.state.editFlag;
		return (
			<div className="block-profile">
				<div className="top-line">
					<h1>Профиль пользователя</h1>
					<button onClick={this.editFlagChange}>Редактировать</button>
				</div>
				<form onSubmit={this.formCheck}>
					<FormBlock label="Name" value={data.name} cnt={cnt}/>
					<FormBlock label="User name" value={data.username} cnt={cnt}/>
					<FormBlock label="E-mail" value={data.email} cnt={cnt}/>
					<FormBlock label="Street" value={data.address.street} cnt={cnt}/>
					<FormBlock label="City" value={data.address.city} cnt={cnt}/>
					<FormBlock label="Zip Code" value={data.address.zipcode} cnt={cnt}/>
					<FormBlock label="Phone" value={data.phone} cnt={cnt}/>
					<FormBlock label="Website" value={data.website} cnt={cnt}/>
					<FormBlock label="Comment" cnt={cnt}/>
					<button className="btn-sub" disabled={this.state.btnFlag} style={{backgroundColor: this.state.btnColor}}>Отправить</button>
				</form>
			</div>
		)
	}
}
