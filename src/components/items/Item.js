import React from 'react';
import {Button} from 'react-bootstrap'
import ManageItemCount from './ManageItemCount'

const Item = (props) => {
	return (
		<li>
			<h3>{props.item.name}</h3>
			<ManageItemCount count={props.item.count || 0} itemCountUp={props.itemCountUp} itemCountDown={props.itemCountDown} />
		</li>
	)
}

export default Item