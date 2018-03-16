import React from 'react'
import ListMediaItem from './ListMediaItem'


const ItemStockpile = (props) => {
	const renderItems = props.items.map(item => <ListMediaItem key={item.id} randomPicture={props.randomPicture} columnwidth={props.columnwidth} item={item} />)
	return (
		<ul className='list-unstyled'>
			{renderItems}
		</ul>
	)
}

export default ItemStockpile
