import React from 'react';
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const ManageItemCount = (props) => {
	return (
		<li>
			<p>
				<Button onClick={props.addItem}>+</Button>
				{props.item.name}
				<Button onClick={props.addItem}>-</Button>
			</p>
		</li>
	)
}

export default ManageItemCount