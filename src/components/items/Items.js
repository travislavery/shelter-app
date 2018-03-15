import React from 'react';
import {Button} from 'react-bootstrap'
import Item from './Item'

const Items = (props) => {
	console.log(props)
	const items = props.items.map(item => <Item key={item.id} item={item} itemCountUp={props.itemCountUp} itemCountDown={props.itemCountDown}/>)
	return (
		<ul>
			{items}
		</ul>
	)
}

export default Items