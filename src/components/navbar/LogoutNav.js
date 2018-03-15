import React from 'react';
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const LogoutNav = (props) => {
	return (
		<li className="nav-item">
			<form onSubmit={props.handleLog}>
				<Button type='submit'><h3>Logout</h3></Button>
			</form>
		</li>
	)
}

export default LogoutNav