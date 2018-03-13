import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import SheltersList from '../components/SheltersList'
import ShelterShow from './ShelterShow'
import ShelterNew from './ShelterNew'
import {fetchShelters} from '../actions/shelters'

class SheltersPage extends Component {
	componentDidMount = () => {
	    //this.props.fetchShelters()
	    console.log(this.props)
	  }
	render(){
		return(
			<div>
				<SheltersList shelters={[{id: 1, name: 'Soupy'}, {id: 2, name: 'Sleepy'}]} />
				<Switch>
					<Route path={`${this.props.match.url}/new`} component={ShelterNew}/>
					<Route path={`${this.props.match.url}/:id`} component={ShelterShow}/>
				</Switch>
			</div>
		)
	}
}

export default connect(null, {fetchShelters})(SheltersPage)