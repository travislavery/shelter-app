import React from 'react'
import ShelterCard from './ShelterCard'

const SheltersList = (props) => {
	const renderShelters = props.shelters.map(shelter => <ShelterCard key={shelter.id} columnwidth={props.columnwidth} shelter={shelter} />)
	return (
		<div className='row'>
			{renderShelters}
		</div>
	)
}

export default SheltersList
