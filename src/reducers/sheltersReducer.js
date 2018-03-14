export default (state=[], action) => {
	switch(action.type) {
		case 'FETCH_SHELTERS':
		  return [...action.payload]
		case 'ADD_SHELTER':
		  return [...state, action.payload]
		default: 
		  return state
	}
}