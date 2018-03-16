import React from 'react';
import ManageItemCount from './ManageItemCount'
import {Button, Form} from 'react-bootstrap'

const Item = (props) => {
	return (
		<div className='row'>
			<h1>{props.item.name}</h1>
			<ManageItemCount item={props.item} shelter={props.shelter} />
			<Button type="submit" name={props.shelter.id} value={props.item.id} onClick={props.handleDelete}>Delete</Button>
		</div>
	)
}

export default Item