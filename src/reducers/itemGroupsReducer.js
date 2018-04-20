export default (state=[], action) => {
	switch(action.type) {
		case 'FETCH_ITEM_GROUPS':
		  return [...action.payload]
		default: 
		  return state
	}
}