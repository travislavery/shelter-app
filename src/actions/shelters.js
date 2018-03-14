export function fetchShelters(){
	return (dispatch) => {
		dispatch({type: 'STARTING_FETCH_SHELTERS'})
		return fetch('http://localhost:4000/v1/shelters')
		.then(response => response.json())
		.then(shelters => dispatch({type: "FETCH_SHELTERS", payload: shelters}))
	}
}

export function createShelter(shelterFormData, xEmail, xToken){
	return (dispatch) => {
		dispatch({type: 'CREATING_SHELTER'})
		return fetch('http://localhost:4000/v1/shelters', {
			method: 'POST',
			body: JSON.stringify(shelterFormData),
			headers: {
				'content-type': 'application/json',
				'X-User-Email': xEmail,
				'X-User-Token': xToken,
			},
			mode: 'cors',
		})
		.then(response => response.json())
		.then(shelter => dispatch({type: "ADD_SHELTER", payload: shelter}))
		.catch(error => console.error(error))
	}
}