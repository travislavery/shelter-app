import React from 'react';
import {Button} from 'react-bootstrap'

const Items = (props) => {
	const items = props.items.map(item => <Item item={item} />)
	return (
		<ul>
			{items}
		</ul>
	)
}

export default Items