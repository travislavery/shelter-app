import React from 'react'
import SubGroupTable from './SubGroupTable'
import {Well} from 'react-bootstrap'

const ItemGroupSection = (props) => {
	const subGroupTables = props.item_group.items.map(item => <SubGroupTable key={item.id} item={item}/>)
	return (
		<Well bsSize="large" bsClass="item-group-well">
			<h1>{props.item_group.name}</h1>
			{subGroupTables}
		</Well>
	)
}

export default ItemGroupSection
