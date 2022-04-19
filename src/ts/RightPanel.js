import React, { Component } from 'react'
import BlockList from './BlockList'

export default class RightPanel extends Component {
	render() {
		const newData = [].concat(this.props.data)
		if (this.props.byCity)
			newData.sort((a, b) => a.address.city[0] > b.address.city[0] ? 1 : -1);
		else if (this.props.byCompany)
			newData.sort((a, b) => a.company.name[0] > b.company.name[0] ? 1 : -1);
		return (
			<div className="right-block">
				<BlockList key={this.props.byCity} data={newData}/>
			</div>
		)
	}
}
