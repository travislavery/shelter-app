export function createItem(itemData, shelterId){
	return (dispatch) => {
		dispatch({type: 'START_CREATE_ITEM'})
		return fetch(`https://lavery-shelter-api.herokuapp.com/v1/shelters/${shelterId}/items`, {
			method: 'POST',
			body: JSON.stringify(itemData),
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
				case 400: dispatch({type: "CREATE_ITEM_ERROR", payload: response}); break;
			}
			if (response.ok){
				return response.json()
			}
		})
		.then(data => {
			if (data) {
				dispatch({type: "SHELTER_ITEM_CREATED", payload: data})
			}
		})
		.catch(error => console.error(error))
	}
}

export function fetchItems(){
	return (dispatch) => {
		dispatch({type: 'STARTING_FETCH_ITEMS'})
		return fetch(`https://lavery-shelter-api.herokuapp.com/v1/items`)
		.then(response => response.json())
		.then(items => dispatch({type: "FETCH_ITEMS", payload: items}))
		.catch(error => console.error(error))
	}
}

