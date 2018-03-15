export function loginUser(userFormData){
	return (dispatch) => {
		dispatch({type: 'BEGINNING_LOGIN'})
		return fetch('http://localhost:4000/v1/sessions', {
			method: 'POST',
			body: JSON.stringify(userFormData),
			headers: {
				'content-type': 'application/json',
			},
			mode: 'cors',
		})
		.then(response => response.json())
		.then(user => dispatch({type: "LOGIN_USER", payload: user}))
		.catch(error => console.error(error))
	}
}

export function signUpUser(userFormData){
	return (dispatch) => {
		dispatch({type: 'SUBMITING_FORM'})
		return fetch('http://localhost:4000/v1/users', {
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

export function fetchUser(){
	return (dispatch)=>{
		dispatch({type: '@@INIT'})
	}
}

export function logout(user){
	return (dispatch)=>{
		dispatch({type: 'START_LOG_OUT'})
		// return fetch('http://localhost:4000/v1/sessions', {
		// 	method: 'DELETE',
		// 	headers: {
		// 		'content-type': 'application/json',
		// 		'X-User-Email': user.email,
		// 		'X-User-Token': user.authentication_token,
		// 	},
		// 	mode: 'cors',
		// })
		// .then(response => dispatch({type: "LOG_OUT"}))
	}
}