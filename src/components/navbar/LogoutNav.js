import React from 'react';
import {Button} from 'react-bootstrap'

const LogoutNav = (props) => {
	return (
		<li className="nav-item">
			<form onSubmit={props.handleLog}>
				<Button bsStyle="link" type='submit'><h3>Logout</h3></Button>
			</form>
		</li>
	)
}

export default LogoutNav