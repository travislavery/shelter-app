import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createShelter} from '../../actions/shelters'
import {Form, Button} from 'react-bootstrap'

class ShelterNew extends Component {
	constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      phone_number: '',
      image: '',
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { createShelter, history, user } = this.props
    const imageUrl = this.state.image === '' ? 'http://a57.foxnews.com/images.foxnews.com/content/fox-news/lifestyle/2017/11/09/how-to-keep-cat-from-scratching-your-sofa-to-shreds/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1510172827500.jpg?ve=1&tl=1&text=big-top-image' : this.state.image
    createShelter({shelter: {
    	name: this.state.name,
    	address: this.state.address,
    	phone_number: this.state.phone_number,
    	image: imageUrl,
    }}, user.email, user.authentication_token);
    history.push('/shelters');
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

	render(){
		return (
			<div>
				<h1>Create a new shelter</h1>
				<Form onSubmit={this.handleOnSubmit}>
					<div className="form-group form-row">
						<label className="col-sm-2 col-form-label">Shelter Name: </label>
						<div className="col-sm-10">
		          <input
		          	className="form-control"
		            type="text"
		            placeholder="Shelter Name"
		            name="name"
		            onChange={this.handleOnChange} />
	        	</div>
	        </div>
	        <div className="form-group form-row">
		        <label className="col-sm-2 col-form-label">Address: </label>
		      	<div className="col-sm-10">
	          	<input
		          	className="form-control"
		            type="text"
		            placeholder="Address"
		            name="address"
		            onChange={this.handleOnChange} />
          	</div>
          </div>
          <div className="form-group form-row">
          	<label className="col-sm-2 col-form-label">Phone Number: </label>
         		<div className="col-sm-10">
		          <input
		          	className="form-control"
		            type="tel"
		            placeholder="Phone Number"
		            name="phone_number"
		            onChange={this.handleOnChange} />
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
		            onChange={this.handleOnChange} />
          	</div>
          </div>
          <Button
            type="submit"
            className="btn btn-primary">
          	Create Shelter
          </Button>
          
        </Form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, {createShelter})(ShelterNew)
//:name, :address, :phone_number