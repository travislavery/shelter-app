import React from 'react';
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const LogoutNav = (props) => {
	return (
		<li className="nav-item">
			<NavLink to='#' onClick={props.handleLog()}><h3>Logout</h3></NavLink>
		</li>
	)
}

export default LogoutNav