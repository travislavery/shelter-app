import React from 'react';
import Item from './Item'

const Items = (props) => {
	console.log(props)
	const itemList = () => {
		if (props.shelter.items){
			return props.shelter.items.map(item =>
			 <Item 
			 	className="col-auto"
			 	key={item.id} 
			 	shelter={props.shelter} 
			 	item={item}
			 />
			)
		} else {
			return <h1>No items!</h1>
		}
	}
		
	return (
		<div className="col-12">
			{itemList()}
		</div>
	)
}

export default Items