import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Navbar} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import LoginNav from './LoginNav'
import LogoutNav from './LogoutNav'
import {logout} from '../actions/user'

class NavBar extends Component{
	constructor(){
		super()

		this.state = {
			logged_in: false
		}
	}

	handleLogout = () => {
	  const {logout} = this.props
	  //logout(this.props.user);
	}

	componentWillReceiveProps = (nextProps) => {
	  console.log(nextProps)
	  const userStatus = nextProps.user !== {} ? true : false
	  this.setState({
	  	logged_in: userStatus,
	  })
	}

	// shouldComponentUpdate(nextProps, nextState){
	// 	const userStatus = nextProps.user !== {} ? true : false
	// 	debugger
	// 	return (userStatus === this.state.logged_in)
	// }

	

	render(){
		const userLoggedIn = this.state.logged_in

		const button = userLoggedIn ? (
				<LogoutNav handleLog={this.handleLogout}/>
			) : (
				<LoginNav />
			)

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
				{button}
			</ul>
			</Navbar.Collapse>
		</Navbar>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, {logout})(NavBar)