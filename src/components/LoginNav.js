import React from 'react';
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const LoginNav = () => {
	return (
		<li className="nav-item">
			<NavLink to="/login"><h3>Login</h3></NavLink>
		</li>
	)
}

export default LoginNav