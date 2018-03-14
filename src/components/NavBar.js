import React from 'react';
import {Navbar, Grid, Button, Form} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import LoginNav from './LoginNav'

const NavBar = (props) => {
	return (
	<Navbar inverse fixedTop className="navbar-toggleable-md">
		<Navbar.Header>
			<Navbar.Brand>
				<h1>Shelter-App</h1>
			</Navbar.Brand>
		</Navbar.Header>
		<Navbar.Collapse className="justify-content-between">
		<ul className="nav navbar-nav mr-auto nav-pills">
			<li className="nav-item">
				<NavLink
						to="/"
						exact>
					<h3>Home</h3>
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink
						to="/shelters"
						exact>
					<h3>Shelters List</h3>
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink
						to="/shelters/new"
						exact>
					<h3>Create Shelter</h3>
				</NavLink>
			</li>
		</ul>
		<ul className="nav navbar-nav mr-auto nav-pills navbar-right">
			<LoginNav />
		</ul>
		</Navbar.Collapse>
	</Navbar>
	)
}

export default NavBar