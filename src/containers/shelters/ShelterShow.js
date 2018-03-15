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

	render(){
		console.log(React.Children)
		return (
			<div>
				<div>
					<ShelterCard shelter={this.props.shelter}/>
				</div>
				<div>
					<Items shelter={this.props.shelter} itemCountUp={this.itemCountUp} itemCountDown={this.itemCountDown}/>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const shelter = state.shelters.find(shelter => shelter.id == ownProps.match.params.shelterId)
	console.log(state)
	if (shelter){
	  return { 
	  	shelter,
	  	user: state.user
	  	}
	} else {
		return {
			shelter: {},
		}
	}
};

export default connect(mapStateToProps, {fetchItems})(ShelterShow)