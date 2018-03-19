export function createItem(itemData, shelterId){
	return (dispatch) => {
		dispatch({type: 'START_CREATE_ITEM'})
		return fetch(`http://localhost:4000/v1/shelters/${shelterId}/items`, {
			method: 'POST',
			body: JSON.stringify(itemData),
			headers: {
				'content-type': 'application/json',
				'X-User-Email': localStorage.getItem('email'),
				'X-User-Token': localStorage.getItem('authentication_token'),
			},
			mode: 'cors',
		})
		.then(response => response.json())
		.then(shelter => dispatch({type: "SHELTER_ITEM_CREATED", payload: shelter}))
		.catch(error => console.error(error))
	}
}

export function fetchItems(){
	return (dispatch) => {
		dispatch({type: 'STARTING_FETCH_ITEMS'})
		return fetch(`http://localhost:4000/v1/items`)
		.then(response => response.json())
		.then(items => dispatch({type: "FETCH_ITEMS", payload: items}))
	}
}

