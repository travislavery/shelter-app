import React from 'react'
import {Link} from 'react-router-dom'
import {Col} from 'react-bootstrap'

const ListMediaItem = (props) => {
	return (
		<li className="media">
			<img className='mr-3' src={props.randomPicture()} alt="" />
			<div className='media-body'>
				<h5 className='mt-0 mb-1'>{props.item.name}</h5>
				{props.item.description}
			</div>
		</li>
	)
}

export default ListMediaItem
