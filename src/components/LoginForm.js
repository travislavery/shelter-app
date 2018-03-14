import React from 'react';
import {Button, Form} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const LoginForm = (props) => {
	return (
		<div>
			<h1>Login</h1>
			<Form onSubmit={(event)=>props.handleOnSubmit(event)} >
				<div className="form-group form-row">
					<label className="col-sm-2 col-form-label">Email: </label>
					<div className="col-sm-10">
	          <input
	          	className="form-control"
	            type="email"
	            placeholder="Email"
	            name="email"
	            onChange={(event)=>props.handleOnChange(event)} />
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
	            onChange={(event)=>props.handleOnChange(event)} />
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

export default LoginForm