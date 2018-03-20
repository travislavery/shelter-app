export default (state=[], action) => {
	switch(action.type) {
		case 'ERROR':
		  return [...action.payload]
		case 'LOGIN_ERROR':
		  return {errorType: action.payload.statusText, message: "Unable to log in successfully, please try again."}
		case "SIGNUP_ERROR":
		  return {errorType: action.payload.statusText, message: "Unable to sign up in successfully, please try again."}
		case "CREATE_SHELTER_ERROR":
		  return {errorType: action.payload.statusText, message: "You must be signed in to create a shelter. Please login and try again."}
		case "CREATE_ITEM_ERROR":
		  return {errorType: action.payload.statusText, message: "Improper syntax to create item, please try again."}
		case "UPDATE_INVENTORY_ERROR":
		  return {errorType: action.payload.statusText, message: "You must own a shelter to update its inventory."}
		default: 
		  return state
	}
}