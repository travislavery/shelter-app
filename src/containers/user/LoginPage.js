import React, {Component} from 'react'
import { connect } from 'react-redux'
import {loginUser, signUpUser} from '../../actions/user.js'
import {Form, Button} from 'react-bootstrap'
import LoginForm from '../../components/user/LoginForm'
import SignUpForm from '../../components/user/SignUpForm'

class LoginPage extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	form: 'login',
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
    history.push('/');
  }

  handleSignUpSubmit = (event) => {
  	event.preventDefault();
  	const {signUpUser, history } = this.props
  	signUpUser({user: {
  		email: this.state.email,
  		password: this.state.password,
  		password_confirmation: this.state.password_confirm,
  	}})
  	history.push('/')
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
	render(){
		const formChoice = this.state.form === 'login' ? (
			<LoginForm 
				  handleOnChange={this.handleOnChange} 
				  handleOnSubmit={this.handleLoginSubmit}/>
			) : (
			<SignUpForm
					handleOnChange={this.handleOnChange} 
				  handleOnSubmit={this.handleSignUpSubmit}/>
			)
		return(
			<div>
				<div></div>
				{formChoice}
				
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	console.log(state)
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, {loginUser, signUpUser})(LoginPage)