export default (state=[], action) => {
	switch(action.type) {
		case 'LOGIN_USER':
		  console.log(state)
		  console.log(action.payload)
		  return {...action.payload}
		default: 
		  return state
	}
}