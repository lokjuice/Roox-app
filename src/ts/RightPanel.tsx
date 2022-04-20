import React from 'react'
import BlockList from './BlockList'

interface IProps {
	data: any;
	byCity: boolean | null;
	byCompany: boolean | null;
}

interface IState {
}

export default class RightPanel extends React.Component<IProps, IState> {
	render() {
		const newData = [].concat(this.props.data)
		if (this.props.byCity)
			newData.sort((a: any, b: any) => a.address.city[0] > b.address.city[0] ? 1 : -1);
		else if (this.props.byCompany)
			newData.sort((a: any, b: any) => a.company.name[0] > b.company.name[0] ? 1 : -1);
		return (
			<div className="right-block" key={String(this.props.byCity)}>
				<BlockList data={newData}/> 
			</div>
		)
	}
}
