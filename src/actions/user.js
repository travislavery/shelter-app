export function loginUser(userFormData){
	return (dispatch) => {
		dispatch({type: 'BEGINNING_LOGIN'})
		return fetch('http://localhost:4000/v1/sessions', {
			method: 'POST',
			body: JSON.stringify(userFormData),
			headers: {
				'content-type': 'application/json'
			},
			mode: 'cors',
		})
		.then(response => response.json())
		.then(user => dispatch({type: "LOGIN_USER", payload: user}))
		.catch(error => console.error(error))
	}
}