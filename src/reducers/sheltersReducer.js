export default (state=[], action) => {
	switch(action.type) {
		case 'FETCH_SHELTERS':
		  return [{id: 1, name: 'Soupy'}, {id: 2, name: 'Sleepy'}]
		default: 
		  return state
	}
}