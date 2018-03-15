export default (state={}, action) => {
	switch(action.type) {
		case 'LOGIN_USER':
		  console.log(state)
		  console.log(action.payload)
		  return {...action.payload}
		case "START_LOG_OUT":
		  console.log("logging out")
		case "LOG_OUT":
		  return {}
		default: 
		  return state
	}
}