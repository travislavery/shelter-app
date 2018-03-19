export default (state={}, action) => {
	switch(action.type) {
		case 'SUBMITING_NEW_USER_FORM':
		  console.log('submitting new user form...')
		  return state
		case 'ATTEMPTING_LOGIN':
		  console.log('attempting login...')
		  return state
		case 'LOGIN_USER':
		  debugger
		  localStorage.setItem('email', action.payload.email)
		  localStorage.setItem('authentication_token', action.payload.authentication_token)
		  return {...action.payload}
		case "START_LOG_OUT":
		  return state
		  console.log('logging out')
		  break
		case "LOG_OUT":
		  localStorage.removeItem('email')
		  localStorage.removeItem('authentication_token')
		  return state
		default: 
		  return state
	}
}