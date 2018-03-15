import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'

const ShelterCard = ({shelter}) => {
	return (
		<div className="col-md-4">
		<div className="card" style={{width: 25+'rem'}}>
			<div className="card-block">
				<div className="card-header"><Link key={shelter.id} to={`/shelters/${shelter.id}`}><h3>{shelter.name}</h3></Link></div>
				<img className="card-img-top" src={shelter.image} style={{width: 25+'rem', height: 17+'rem'}} />
				<div className="card-body">
					<p className="card-text">Address: {shelter.address}</p>
					<p className="card-text">Phone Number: {shelter.phone_number}</p>
				</div>
			</div>
			
		</div>
		</div>
	)
}

export default ShelterCard

// <ul className="list-group list-group-flush">
// 					<li className="list-group-item">Address: {shelter.address}</li>
// 					<li className="list-group-item">Phone Number: {shelter.phone_number}</li>
// 				</ul>