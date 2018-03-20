export default (state=[], action) => {
	switch(action.type) {
		case 'START_CREATE_ITEM':
		  console.log('getting items...')
		  return state
		case 'FETCH_ITEMS':
		  return [...action.payload]
		case 'ADD_ITEM':
		  return [...state, action.payload]
		case 'ITEM_COUNT_UPDATED':
		  return [action.payload, ...state.filter(item=> item.id !== action.payload.id)]
		default: 
		  return state
	}
}