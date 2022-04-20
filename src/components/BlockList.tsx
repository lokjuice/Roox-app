import React from 'react'
import BlockProfile from './BlockProfile'

interface IProps {
	data: any;
}

interface IState {
	data: any;
	visibility: boolean;
	idOfBlock: number;
}


export default class BlockList extends React.Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
	
		this.state = {
			data: props.data,
			visibility: true,
			idOfBlock: -1, //null
		};
		this.printId = this.printId.bind(this);
	}
	printId(event: any){
		this.setState({
			visibility: false,
			idOfBlock: event.target.id,
		});
	}
	render() {
		const { data } = this.state;
		let counter = 0;
		if (this.state.visibility) {
			return (
				<div className="block-list">
					<h1>Список пользователей</h1>
					<ul className="persons-blocks-container">
						{data.map((data: any) =>
							<li className="person-block" key={data.name}>
								<div className="person-info">
									<p>ФИО: <span className="name">{data.name}</span></p>
									<p>город: <span className="city">{data.address.city}</span></p>
									<p>компания: <span className="company">{data.company.name}</span></p>
								</div>
								<button className="more-info" id={String(counter++)} onClick={this.printId}>Подробнее</button>
							</li>
						)}
					</ul>
					<div className="person-find"><p>Найдено 10 пользователей</p></div>
				</div>
			);
		} else {
			return (
				<div>
					<BlockProfile data={data[this.state.idOfBlock]}/>
				</div>
			);
		}
	}
}
