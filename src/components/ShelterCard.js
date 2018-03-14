import React from 'react'

const ShelterCard = ({shelter}) => {
	return (
		<div>
			{shelter.id}
			{shelter.name}
		</div>
	)
}

export default ShelterCard