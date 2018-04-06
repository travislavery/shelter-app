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
    const imageUrl = this.state.image === '' ? "http://www.clker.com/cliparts/f/e/6/c/120743200840710503sleeping%20shelter%20white.svg.med.png" : this.state.image

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