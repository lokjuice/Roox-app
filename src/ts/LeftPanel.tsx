import React from 'react'


interface IProps {
	data: any;
	// byCity: boolean | null;
	// byCompany: boolean | null;
	updateData(value1: boolean, value2: boolean): void;
}

interface IState {
	data: any;
	// byCity: boolean | null;
	// byCompany: boolean | null;
}

export default class LeftPanel extends React.Component<IProps, IState> {
	// constructor(props: IProps) {
	// 	super(props)
	
	// 	this.state = {
	// 		 data: props.data,
	// 		//  byCity: props.byCity,
	// 		//  byCompany: props.byCompany,
	// 	}
	// }
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
