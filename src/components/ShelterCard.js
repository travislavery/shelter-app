import React from 'react'
import {Link} from 'react-router-dom'

const ShelterCard = ({shelter}) => {
	return (
		<div>
			<Link key={shelter.id} to={`/shelters/${shelter.id}`}><h2>{shelter.name}</h2></Link>
			<p>Address: {shelter.address}</p>
			<p>Phone Number: {shelter.phone_number}</p>
		</div>
	)
}

export default ShelterCard