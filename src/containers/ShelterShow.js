import React, {Component} from 'react'
import {connect} from 'react-redux'

class ShelterShow extends Component{
	componentDidMount = () => {
		console.log(this.props)
	}
	render(){
		return (
			<div>
				<h1>Shelter Show page!</h1>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const shelter = state.shelters.find(shelter => shelter.id == ownProps.match.params.shelterId)
	if (shelter){
	  console.log(shelter)
	  return { shelter }
	} else {
		return {shelter: {}}
	}
};

export default connect(mapStateToProps, {})(ShelterShow)