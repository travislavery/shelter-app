import React from 'react'
import ListMediaItem from './ListMediaItem'


const ItemStockpile = (props) => {
	const itemsWithShelter = props.items.filter(item => item.shelter_items.length > 0)
	const associatedShelters = props.shelters.filter(shelter => shelter.items.length > 0)
	const renderItems = itemsWithShelter.map(item => <ListMediaItem key={item.id} columnwidth={props.columnwidth} item={item} shelters={associatedShelters}/>)
	//debugger
	return (
		<div>
			{renderItems}
		</div>
	)
}

export default ItemStockpile
