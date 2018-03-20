import React, {Component} from 'react'
import {connect} from 'react-redux'
import ShelterCard from '../../components/shelters/ShelterCard'
import {Button} from 'react-bootstrap'
import {fetchItems} from '../../actions/items'
import Items from '../../components/items/Items'
import NewItemModal from '../../components/items/NewItemModal'
import ExistingItemsModal from '../../components/items/ExistingItemsModal'


class ShelterShow extends Component{
	constructor(){
		super()
		this.state={

		}
	}
	componentDidMount = () => {
		this.props.fetchItems()
	}

	

	render(){
		return (
			<div>
				<div>
					<ShelterCard shelter={this.props.shelter}/>
				</div>
				<div>
					<h1>Items Inventory</h1>
					<NewItemModal shelter={this.props.shelter} />
					<ExistingItemsModal shelter={this.props.shelter} items={this.props.items} />
					<Items shelter={this.props.shelter}/>
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
	  	user: state.user,
	  	items: state.items,
	  	}
	} else {
		return {
			shelter: {},
		}
	}
};

export default connect(mapStateToProps, {fetchItems})(ShelterShow)