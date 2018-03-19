export default (state=[], action) => {
	switch(action.type) {
		case 'ERROR':
		  return [...action.payload]
		case 'LOGIN_ERROR':
		  return {errorType: action.payload.statusText, message: "Unable to log in successfully, please try again."}
		case "SIGNUP_ERROR":
		  debugger
		  return {errorType: action.payload.statusText, message: "Unable to sign up in successfully, please try again."}
		default: 
		  return state
	}
}