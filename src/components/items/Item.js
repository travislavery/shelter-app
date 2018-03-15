import React from 'react';
import ManageItemCount from './ManageItemCount'

const Item = (props) => {
	return (
		<div className='row'>
			<h1>{props.item.name}</h1>
			<ManageItemCount item={props.item} shelter={props.shelter} />
		</div>
	)
}

export default Item