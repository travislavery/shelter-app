import React from 'react';
import ManageItemCount from './ManageItemCount'
import {Row, Col} from 'react-bootstrap'

const Item = (props) => {
	return (
		<Row>
			<Col>
				<h1>{props.item.group_name}</h1>
				<p>{props.item.description}</p>
			</Col>
			<Col>
				<ManageItemCount item={props.item} shelter={props.shelter} />
			</Col>
		</Row>
	)
}

export default Item