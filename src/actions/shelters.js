export function fetchShelters(){
	return (dispatch) => {
		dispatch({type: 'LOADING_SHELTERS'})
		return fetch('http://localhost:4000')
		.then(response => response.json())
		.then(shelters => dispatch({type: "FETCH_SHELTERS", payload: shelters}))
	}
}