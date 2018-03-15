import React, {Component} from 'react';
import {Button, Form} from 'react-bootstrap'
import {updateShelterItem} from '../../actions/shelters'
import {connect} from 'react-redux'

class ManageItemCount extends Component{
	constructor(props){
		super(props)
		const count = props.shelter.shelter_items.find(itemCount => itemCount.item_id === props.item.id).inventory
		this.state={
			inventory: count
		}
	}

	handleUpCount = () =>{
		this.setState({
			inventory: this.state.inventory + 1
		})
		//this.props.itemCountUp(event)
	}

	handleDownCount = () => {
		this.setState({
			inventory: this.state.inventory - 1
		})
		//this.props.itemCountDown(event)
	}

	handleChange = (event) => {
		this.setState({
			inventory: event.target.value,
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.updateShelterItem({
			inventory: this.state.inventory,
			shelter_id: this.props.shelter.id,
			item_id: this.props.item.id,
		})
	}

	render(){
		return (
			<Form onSubmit={(event)=>this.handleSubmit(event)}>
				<Button onClick={this.handleDownCount}>-</Button>
				<input type='number' value={this.state.inventory} onChange={(event) => this.handleChange(event)}/>
				<Button onClick={this.handleUpCount}>+</Button>
				<input type='submit' />
			</Form>
		)
	}
}

export default connect(null, {updateShelterItem})(ManageItemCount)