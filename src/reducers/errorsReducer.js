export default (state=[], action) => {
	switch(action.type) {
		case 'ERROR':
		  return [...action.payload]
		case 'LOGIN_ERROR':
		  debugger
		  return {error: action.payload.statusText}
		default: 
		  return state
	}
}