import React from 'react'
import ListMediaItem from './ListMediaItem'


const ItemStockpile = (props) => {
	const itemsWithShelter = props.items.filter(item => item.shelters.length > 0)
	const renderItems = itemsWithShelter.map(item => <ListMediaItem key={item.id} columnwidth={props.columnwidth} item={item} />)
	return (
		<div>
			{renderItems}
		</div>
	)
}

export default ItemStockpile
