export default (state=[], action) => {
	if (action.error){
		console.log(action.error)
		return state
	} else {
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
}