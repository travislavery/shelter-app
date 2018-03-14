import React, {Component} from 'react'
import { connect } from 'react-redux'
import {loginUser} from '../actions/users.js'


class LoginPage extends Component {
	constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { loginUser, history } = this.props
    loginUser(this.state);
    history.push('/');
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
	render(){
		return(
			<div>
				<h1>Login</h1>
				<Form onSubmit={this.handleOnSubmit} >
					<div className="form-group form-row">
						<label className="col-sm-2 col-form-label">Email: </label>
						<div className="col-sm-10">
		          <input
		          	className="form-control"
		            type="email"
		            placeholder="Email"
		            name="email"
		            onChange={this.handleOnChange} />
	        	</div>
	        </div>
	        <div className="form-group form-row">
		        <label className="col-sm-2 col-form-label">Password: </label>
		      	<div className="col-sm-10">
	          	<input
		          	className="form-control"
		            type="password"
		            placeholder="Password"
		            name="password"
		            onChange={this.handleOnChange} />
          	</div>
          </div>
          <Button
            type="submit"
            className="btn btn-primary">
          	Login
          </Button>
        </Form>
			</div>
		)
	}
}

export default connect(null, {loginUser})(LoginPage)