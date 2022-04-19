import React, { Component } from 'react'
import FormBlock from './FormBlock';

export default class BlockProfile extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			data: props.data,
		};
	}
	render() {
		const { data } = this.state;
		// console.log(data);
		console.log(this.props.idOfBlock);
		return (
			<div className="block-profile">
				<div className="top-line">
					<h1>Профиль пользователя</h1>
					<button>Редактировать</button>
				</div>
				<form>
					<FormBlock label="Name" value={data}/>
					<FormBlock label="User name" value={data}/>
					<FormBlock label="E-mail" value={data}/>
					<FormBlock label="Street" value={data}/>
				</form>
				<button type="submit" className="btn-sub">Отправить</button>
			</div>
		)
	}
}
