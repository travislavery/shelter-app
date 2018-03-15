import React from 'react';
import {Button, Form} from 'react-bootstrap'

const SignUpForm = (props) => {
	return (
		<div>
			<h1>Sign Up</h1>
			<p>Have an account? <Button name="form" value="login" onClick={(event)=>props.handleOnChange(event)}>Login!</Button></p>
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
        <div className="form-group form-row">
	        <label className="col-sm-2 col-form-label">Confirm Password: </label>
	      	<div className="col-sm-10">
          	<input
	          	className="form-control"
	            type="password_confirm"
	            placeholder="Password Confirm"
	            name="password_confirm"
	            onChange={(event)=>props.handleOnChange(event)} />
        	</div>
        </div>
        <Button
          type="submit"
          className="btn btn-primary">
        	Sign Up!
        </Button>
      </Form>
		</div>
	)
}

export default SignUpForm