import React from 'react';
import {Button} from 'react-bootstrap'
import ManageItemCount from './ManageItemCount'

const Item = (props) => {
	return (
		<div className='row'>
			<h1>{props.item.name}</h1>
			<ManageItemCount count={props.count === undefined ? 0 : props.count} itemCountUp={props.itemCountUp} itemCountDown={props.itemCountDown} />
		</div>
	)
}

export default Item