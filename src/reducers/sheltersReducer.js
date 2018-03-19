export default (state=[], action) => {
	switch(action.type) {
		case 'STARTING_FETCH_SHELTERS':
		  console.log('getting shelters...')
		  return state
		case 'FETCH_SHELTERS':
		  return [...action.payload]
		case 'ADD_SHELTER':
		  debugger
		  return [...state, action.payload]
		case "SHELTER_ITEM_CREATED":
		  return [action.payload, ...state.filter(shelter=> shelter.id !== action.payload.id)]
		case 'SHELTER_ITEM_COUNT_UPDATED':
		  return [...state.filter(shelter=> shelter.id !== action.payload.id), action.payload]
		case 'ITEM_DELETED':
		  return [action.payload, ...state.filter(shelter=> shelter.id !== action.payload.id)]
		default: 
		  return state
	}
}