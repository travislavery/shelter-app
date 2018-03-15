import React from 'react'
import {Link} from 'react-router-dom'
import {Col} from 'react-bootstrap'

const ShelterCard = (props) => {
	return (
		<Col md={props.columnwidth} >
		<div className="card" style={{width: 25+'rem'}}>
			<div className="card-block">
				<div className="card-header"><Link key={props.shelter.id} to={`/shelters/${props.shelter.id}`}><h3>{props.shelter.name}</h3></Link></div>
				<img alt='' className="card-img-top" src={props.shelter.image} style={{width: 25+'rem', height: 17+'rem'}} />
				<div className="card-body">
					<p className="card-text">Address: {props.shelter.address}</p>
					<p className="card-text">Phone Number: {props.shelter.phone_number}</p>
				</div>
			</div>
			
		</div>
		</Col>
	)
}

export default ShelterCard
