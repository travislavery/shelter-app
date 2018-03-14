import React, {Component} from 'react'
import { connect } from 'react-redux'
import {loginUser, signUpUser} from '../actions/user.js'
import {Form, Button} from 'react-bootstrap'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'

class LoginPage extends Component {
	constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirm: '',
    };
  }

  handleLoginSubmit = (event)=>{
    event.preventDefault();
    const { loginUser, history } = this.props
    loginUser({
    	email: this.state.email,
    	password: this.state.password
    });
    //history.push('/');
  }

  handleSignUpSubmit = (event) => {
  	event.preventDefault();
  	const {signUpUser, history } = this.props
  	signUpUser({user: {
  		email: this.state.email,
  		password: this.state.password,
  		password_confirmation: this.state.password_confirm,
  	}})
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
	render(){
		return(
			<div>
				<LoginForm 
				  handleOnChange={this.handleOnChange} 
				  handleOnSubmit={this.handleLoginSubmit}/>
				<SignUpForm
					handleOnChange={this.handleOnChange} 
				  handleOnSubmit={this.handleSignUpSubmit}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const xUser = state.user ? state.user : {}
	console.log(state)
	return {
		user: xUser
	}
}

export default connect(mapStateToProps, {loginUser, signUpUser})(LoginPage)