import React from 'react'
import {Link} from 'react-router-dom'

const SheltersList = ({shelters}) => {
	const renderShelters = shelters.map(shelter => <Link key={shelter.id} to={`/shelters/${shelter.id}`}>{shelter.name}</Link>)
	return (
		<div>
			{renderShelters}
		</div>
	)
}

export default SheltersList