import React from 'react'
import FormBlock from './FormBlock';

interface IProps {
	data: any;
}

interface IState {
	editFlag: number;
	btnColor: string;
	btnFlag: boolean;
}

export default class BlockProfile extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
	
		this.state = {
			 editFlag: 0,
			 btnColor: "#AFAFAF",
			 btnFlag: true,
		}
		this.editFlagChange = this.editFlagChange.bind(this);
		this.formSave = this.formSave.bind(this);
	}
	editFlagChange() {
		this.setState({
			editFlag: 1,
			btnColor: "#52CF4F",
			btnFlag: false,
		});
	}
	formSave(event: any) {
		let mas = [];
		for (let i = 0; i < 9; i++){
			mas.push(event.target[i].value);
		}
		let saveJson = JSON.stringify(mas);
		console.log(saveJson);
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
				<form onSubmit={this.formSave}>
					<FormBlock label="Name" value={data.name} cnt={cnt}/>
					<FormBlock label="User name" value={data.username} cnt={cnt}/>
					<FormBlock label="E-mail" value={data.email} cnt={cnt}/>
					<FormBlock label="Street" value={data.address.street} cnt={cnt}/>
					<FormBlock label="City" value={data.address.city} cnt={cnt}/>
					<FormBlock label="Zip Code" value={data.address.zipcode} cnt={cnt}/>
					<FormBlock label="Phone" value={data.phone} cnt={cnt}/>
					<FormBlock label="Website" value={data.website} cnt={cnt}/>
					<FormBlock label="Comment" value="" cnt={cnt} type="text-area"/>
					<button className="btn-sub" disabled={this.state.btnFlag} style={{backgroundColor: this.state.btnColor}}>Отправить</button>
				</form>
			</div>
		)
	}
}
