import React, {Component} from 'react'
import {connect} from 'react-redux'
import ShelterCard from '../../components/shelters/ShelterCard'
import {Button} from 'react-bootstrap'
import {fetchItems} from '../../actions/items'
import Items from '../../components/items/Items'


class ShelterShow extends Component{
	componentDidMount = () => {
		//this.props.fetchItems(this.props.shelter.id)
	}

	itemCountUp = () => {
		console.log("added")
	}

	itemCountDown = () => {
		console.log("subtracted")
	}

	render(){
		console.log(this.props)
		return (
			<div>
				<ShelterCard shelter={this.props.shelter}/>
				<Items items={this.props.shelter.items} itemCountUp={this.itemCountUp} itemCountDown={this.itemCountDown}/>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const shelter = state.shelters.find(shelter => shelter.id == ownProps.match.params.shelterId)
	console.log(state)
	if (shelter){
	  return { 
	  	shelter
	  	}
	} else {
		return {
			shelter: {},
		}
	}
};

export default connect(mapStateToProps, {fetchItems})(ShelterShow)