import React, {Component} from 'react'
import { connect } from 'react-redux'
import SheltersList from '../../components/shelters/SheltersList'

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