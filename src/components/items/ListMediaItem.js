import React from 'react'
import {Link} from 'react-router-dom'
import {Table} from 'react-bootstrap'
import TableRowShelter from './TableRowShelter'

const ListMediaItem = (props) => {
	const tableRows = props.item.shelters.map(shelter => <TableRowShelter key={shelter.id} shelter={shelter} count={props.item.shelter_items.find(sh => sh.shelter_id === shelter.id).inventory}/>)
	return (
		<div>
			<h1>{props.item.name}</h1>
			<h4>{props.item.description}</h4>
			<Table striped condensed>
				<thead>
					<tr>
						<th>Shelter</th>
						<th>Inventory</th>
					</tr>
				</thead>
				<tbody>
					{tableRows}
				</tbody>
			</Table>
		</div>
	)
}

export default ListMediaItem
