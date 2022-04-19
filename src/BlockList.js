import React, { Component } from 'react'

export default class BlockList extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			data: props.data,
			visibility: true,
			idOfBlock: null,
		};
		this.printId = this.printId.bind(this);
	}
	printId(event){
		// console.log(this.state.data);
		// console.log(event.target.id);
		this.setState({
			visibility: false,
			idOfBlock: this.props.getId(event.target.id),
		});
		// this.props.getId(event.target.id);
	}
	render() {
		const { data } = this.state;
		let counter = 0;
		if (this.state.visibility)
			return (
				<div className="block-list">
					<h1>Список пользователей</h1>
					<ul className="persons-blocks-container">
						{data.map(data =>
							<li className="person-block" key={data.name}>
								<div className="person-info">
									<p>ФИО: <span className="name">{data.name}</span></p>
									<p>город: <span className="city">{data.address.city}</span></p>
									<p>компания: <span className="company">{data.company.name}</span></p>
								</div>
								<button className="more-info" id={counter++} onClick={this.printId}>Подробнее</button>
							</li>
						)}
					</ul>
					<div className="person-find"><p>Найдено 10 пользователей</p></div>
				</div>
			);
		}
		else
			return ;
}
