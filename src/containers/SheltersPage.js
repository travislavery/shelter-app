import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import SheltersList from '../components/SheltersList'
import ShelterNew from './ShelterNew'
import ShelterShow from './ShelterShow'

class SheltersPage extends Component {
	render(){
		return(
			<div>
				<SheltersList columnwidth={4} shelters={this.props.shelters} />
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
		shelters: state.shelters
	}
}
export default connect(mapStateToProps, {})(SheltersPage)