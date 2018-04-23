import React from 'react'

const TableRowShelter = (props) => {
	return (
		<tr>
			<td>{props.shelter_name}</td>
			<td>{props.count}</td>
		</tr>
	)
}

export default TableRowShelter
