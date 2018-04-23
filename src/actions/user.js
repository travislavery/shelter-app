export function loginUser(userFormData){
	return (dispatch) => {
		dispatch({type: 'ATTEMPTING_LOGIN'})
		return fetch('https://lavery-shelter-api.herokuapp.com/v1/sessions', {
		//return fetch('http://localhost:4000/v1/sessions', {
			method: 'POST',
			body: JSON.stringify(userFormData),
			headers: {
				'content-type': 'application/json',
			},
			mode: 'cors',
		})
		.then(response => {
			switch (response.status) {
				case 401: dispatch({type: "LOGIN_ERROR", payload: response}); break;
			}
			if (response.ok){
				return response.json()
			}
		})
		.then(user => {
			if (user) {
				dispatch({type: "LOGIN_USER", payload: user})
			}
		})
	}
}

export function verifyLocalUser(email, token){
	return (dispatch) => {
		return fetch('https://lavery-shelter-api.herokuapp.com/v1/sessions', {
		//return fetch('http://localhost:4000/v1/sessions', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'X-User-Email': email,
				'X-User-Token': token
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
		dispatch({type: 'SUBMITING_NEW_USER_FORM'})
		return fetch('https://lavery-shelter-api.herokuapp.com/v1/users', {
		//return fetch('http://localhost:4000/v1/users', {
			method: 'POST',
			body: JSON.stringify(userFormData),
			headers: {
				'content-type': 'application/json'
			},
			mode: 'cors',
		})
		.then(response => {
			switch (response.status) {
				case 403: dispatch({type: "SIGNUP_ERROR", payload: response}); break;
			}
			if (response.ok){
				return response.json()
			}
		})
		.then(user => {
			if (user) {
				dispatch({type: "LOGIN_USER", payload: user})
			}
		})
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
		return fetch('https://lavery-shelter-api.herokuapp.com/v1/sessions', {
		//return fetch('http://localhost:4000/v1/sessions', {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
				'X-User-Email': user.email,
				'X-User-Token': user.authentication_token,
			},
			mode: 'cors',
		})
		.then(response => dispatch({type: "LOG_OUT"}))
	}
}