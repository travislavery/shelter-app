export default (state=[], action) => {
	switch(action.type) {
		case 'START_CREATE_ITEM':
		  console.log('getting items...')
		  return state
		case 'FETCH_ITEMS':
		  return [...action.payload]
		case 'ADD_ITEM':
		  return [...state, action.payload]
		default: 
		  return state
	}
}