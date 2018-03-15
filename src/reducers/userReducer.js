export default (state={}, action) => {
	switch(action.type) {
		case 'SUBMITING_NEW_USER_FORM':
		  console.log('submitting new user form...')
		  return state
		case 'ATTEMPTING_LOGIN':
		  console.log('attempting login...')
		  return state
		case 'LOGIN_USER':
		  localStorage.setItem('email', action.payload.email)
		  localStorage.setItem('authentication_token', action.payload.authorization_token)
		  return {...action.payload}
		case "START_LOG_OUT":
		  console.log("logging out")
		  break
		case "LOG_OUT":
		  return state
		default: 
		  return state
	}
}