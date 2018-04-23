import React from 'react'
import SubGroupTable from './SubGroupTable'

const ItemGroupSection = (props) => {
	const subGroupTables = props.item_group.items.map(item => <SubGroupTable key={item.id} item={item}/>)
	return (
		<div>
			<h1>{props.item_group.name}</h1>
			{subGroupTables}
		</div>
	)
}

export default ItemGroupSection
