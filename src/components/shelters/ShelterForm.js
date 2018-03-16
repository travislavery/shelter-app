import React from 'react'
import {Form, Button} from 'react-bootstrap'

const ShelterForm = (props) => {
	return (
		<Form onSubmit={(event)=> props.handleOnSubmit(event)}>
			<div className="form-group form-row">
				<label className="col-sm-2 col-form-label">Shelter Name: </label>
				<div className="col-sm-10">
	          <input
	          	requred
	          	className="form-control"
	            type="text"
	            placeholder="Shelter Name"
	            name="name"
	            onChange={(event)=> props.handleOnChange(event)} />
	    	</div>
      </div>
      <div className="form-group form-row">
        <label className="col-sm-2 col-form-label">Address: </label>
      	<div className="col-sm-10">
        	<input
        		required
          	className="form-control"
            type="text"
            placeholder="Address"
            name="address"
            onChange={(event)=> props.handleOnChange(event)} />
      	</div>
      </div>
      <div className="form-group form-row">
      	<label className="col-sm-2 col-form-label">Phone Number: </label>
     		<div className="col-sm-10">
          <input
           	required
          	className="form-control"
            type="tel"
            placeholder="Phone Number"
            name="phone_number"
            onChange={(event)=> props.handleOnChange(event)} />
      	</div>
      </div>
      <div className="form-group form-row">
      	<label className="col-sm-2 col-form-label">Picture Url: </label>
     		<div className="col-sm-10">
          <input
          	className="form-control"
            type="text"
            placeholder="Image URL"
            name="image"
            onChange={(event)=> props.handleOnChange(event)} />
      	</div>
      </div>
      <Button
        type="submit"
        className="btn btn-primary">
      	Create Shelter
      </Button>    
    </Form>
	)
}

export default ShelterForm

