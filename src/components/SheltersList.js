import React from 'react'
import ShelterCard from './ShelterCard'

const SheltersList = ({shelters}) => {
	const renderShelters = shelters.map(shelter => <ShelterCard key={shelter.id} shelter={shelter} />)
	return (
		<div>
			{renderShelters}
		</div>
	)
}

export default SheltersList
