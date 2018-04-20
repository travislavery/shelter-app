export function fetchShelters(){
	return (dispatch) => {
		dispatch({type: 'STARTING_FETCH_SHELTERS'})
		//return fetch('https://lavery-shelter-api.herokuapp.com/v1/shelters')
		return fetch('http://localhost:4000/v1/shelters')
		.then(response => response.json())
		.then(shelters => dispatch({type: "FETCH_SHELTERS", payload: shelters}))
		.catch(error => console.error(error))
	}
}
//https://lavery-shelter-api.herokuapp.com/v1/shelters
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
		.then(response => {
			switch (response.status) {
				case 401: dispatch({type: "CREATE_SHELTER_ERROR", payload: response}); break;
			}
			if (response.ok){
				return response.json()
			}
		})
		.then(shelter => {
			if (shelter) {
				dispatch({type: "ADD_SHELTER", payload: shelter})
			}
		})
		.catch(error => console.error(error))
	}
}

export function updateShelterItem(inventory){
	return (dispatch) => {
		//return fetch('https://lavery-shelter-api.herokuapp.com/v1/shelter_items', {
		return fetch('http://localhost:4000/v1/shelter_items', {
			method: 'POST',
			body: JSON.stringify(inventory),
			headers: {
				'content-type': 'application/json',
				'X-User-Email': localStorage.getItem('email'),
				'X-User-Token': localStorage.getItem('authentication_token'),
			},
			mode: 'cors',
		})
		.then(response => {
			switch (response.status) {
				case 401: dispatch({type: "UPDATE_INVENTORY_ERROR", payload: response}); break;
			}
			if (response.ok){
				return response.json()
			}
		})
		.then(shelter => {
			if (shelter) {
				dispatch({type: "SHELTER_ITEM_COUNT_UPDATED", payload: shelter})
			}
		})
		.catch(error => console.error(error))
	}
}


export function deleteItem(shelterItemId){
	return (dispatch) => {
		//return fetch(`https://lavery-shelter-api.herokuapp.com/v1/shelter_items/${shelterItemId}`, {
		return fetch(`http://localhost:4000/v1/shelter_items/${shelterItemId}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
				'X-User-Email': localStorage.getItem('email'),
				'X-User-Token': localStorage.getItem('authentication_token'),
			},
			mode: 'cors',
		})
		.then(response => {
			switch (response.status) {
				case 401: dispatch({type: "UPDATE_INVENTORY_ERROR", payload: response}); break;
			}
			if (response.ok){
				return response.json()
			}
		})
		.then(shelter => {
			if (shelter) {
				dispatch({type: "ITEM_DELETED", payload: shelter})
			}
		})
		.catch(error => console.error(error))
	}
}