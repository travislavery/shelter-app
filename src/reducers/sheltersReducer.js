export default (state=[], action) => {
	switch(action.type) {
		case 'STARTING_FETCH_SHELTERS':
		  console.log('getting shelters...')
		  return state
		case 'FETCH_SHELTERS':
		  return [...action.payload]
		case 'ADD_SHELTER':
		  return [...state, action.payload]
		default: 
		  return state
	}
}