import React, {Component} from 'react'
import {connect} from 'react-redux'
import ShelterCard from '../../components/shelters/ShelterCard'
import {Button} from 'react-bootstrap'


class ShelterShow extends Component{
	componentDidMount = () => {
		console.log(this.props)
	}

	addItem = () => {
		console.log("added")
	}
	render(){
		return (
			<div>
				<ShelterCard shelter={this.props.shelter}/>
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