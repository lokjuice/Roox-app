import React, { Component } from 'react'
import BlockList from './BlockList'
import BlockProfile from './BlockProfile'

export default class RightPanel extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 idOfBlock: 0,
		}
		this.getId = this.getId.bind(this);
	}
	getId = (id) => {
		this.setState({
			idOfBlock: id,
		})
	}
	render() {
		const newData = [].concat(this.props.data)
		if (this.props.byCity)
			newData.sort((a, b) => a.address.city[0] > b.address.city[0] ? 1 : -1);
		else if (this.props.byCompany)
			newData.sort((a, b) => a.company.name[0] > b.company.name[0] ? 1 : -1);
		return (
			<div className="right-block">
				<BlockList key={this.props.byCity} data={newData} getId={this.getId}/>
				<BlockProfile data={newData} idOfBlock={this.state.idOfBlock}/>
			</div>
		)
	}
}
