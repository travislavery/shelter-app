import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import SheltersList from '../components/SheltersList'
import ShelterNew from './ShelterNew'
import ShelterShow from './ShelterShow'
import {fetchShelters} from '../actions/shelters'

class SheltersPage extends Component {
	componentDidMount = () => {
	    this.props.fetchShelters()
	  }
	render(){
		return(
			<div>
				<SheltersList shelters={this.props.shelters} />
				
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
		shelters: state.shelters
	}
}
export default connect(mapStateToProps, {fetchShelters})(SheltersPage)