import React from 'react';
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const ManageItemCount = (props) => {
	return (
		<div>
			<Button onClick={props.itemCountDown}>-</Button>
			{props.count}
			<Button onClick={props.itemCountUp}>+</Button>
		</div>
	)
}

export default ManageItemCount