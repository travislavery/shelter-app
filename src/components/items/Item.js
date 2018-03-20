import React from 'react';
import ManageItemCount from './ManageItemCount'
import {Button, Form} from 'react-bootstrap'

const Item = (props) => {
	return (
		<div className='row'>
			<h1>{props.item.name}</h1>
			<p>{props.item.description}</p>
			<ManageItemCount item={props.item} shelter={props.shelter} />
		</div>
	)
}

export default Item