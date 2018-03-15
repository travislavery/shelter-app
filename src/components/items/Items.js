import React from 'react';
import {Button} from 'react-bootstrap'
import Item from './Item'

const Items = (props) => {
	console.log(props)
	const itemList = () => {
		if (props.shelter.items){
			return props.shelter.items.map(item =>
			 <Item 
			 	className="col-auto"
			 	key={item.id} 
			 	count={props.shelter.shelter_items.find(shelitem=> shelitem.item_id === item.id)} 
			 	item={item} 
			 	itemCountUp={props.itemCountUp} 
			 	itemCountDown={props.itemCountDown}
			 />
			)
		} else {
			return <h1>No items!</h1>
		}
	}
		
	return (
		<div className="col-12">
			<h1>Items Inventory</h1>
			{itemList()}
		</div>
	)
}

export default Items