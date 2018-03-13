import React from 'react';
import {Navbar, Grid} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
	<Navbar inverse fixedTop>
		<Grid>
			<Navbar.Header>
				<Navbar.Brand>
					<NavLink
						to="/"
						exact>
					Home
					</NavLink>
					<NavLink
						to="/shelters"
						exact>
					Shelters List
					</NavLink>
				</Navbar.Brand>
			</Navbar.Header>
		</Grid>
	</Navbar>
	)
}

export default NavBar