import React from 'react'
import {Link} from 'react-router-dom'

const ListMediaItem = (props) => {
	return (
		<li className="media">
			<img className='mr-3' src='' alt="" />
			<div className='media-body'>
				<h2 className='mt-0 mb-1'>{props.item.name}</h2>
				{props.item.description}
			</div>
		</li>
	)
}

export default ListMediaItem
