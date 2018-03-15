import React from 'react';
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const ManageItemCount = (props) => {
	return (
		<div>
			<Button onClick={props.addItem}>+</Button>
			{props.count}
			<Button onClick={props.subtractItem}>-</Button>
		</div>
	)
}

export default ManageItemCount