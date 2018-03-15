import React from 'react';
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const ManageItemCount = (props) => {
	return (
		<h2>
			<Button onClick={props.itemCountDown}>-</Button>
			{props.count.inventory}
			<Button onClick={props.itemCountUp}>+</Button>
		</h2>
	)
}

export default ManageItemCount