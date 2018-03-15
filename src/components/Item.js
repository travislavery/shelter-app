import React from 'react';
import {Button} from 'react-bootstrap'
import ManageItemCount from '../components/ManageItemCount'

const Item = (props) => {
	return (
		<li>
			<h3>{props.item.name}</h3>
			<ManageItemCount count={props.item.count} />
		</li>
	)
}

export default Item