import React, {Component} from 'react'
import {connect} from 'react-redux'
import {createShelter} from '../../actions/shelters'
import ShelterForm from '../../components/shelters/ShelterForm'

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
				<ShelterForm handleOnChange={this.handleOnChange} handleOnSubmit={this.handleOnSubmit}/>
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