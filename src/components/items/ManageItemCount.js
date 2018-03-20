import React, {Component} from 'react';
import {Button, Form} from 'react-bootstrap'
import {updateShelterItem} from '../../actions/shelters'
import {deleteItem} from '../../actions/shelters'
import {connect} from 'react-redux'

class ManageItemCount extends Component{
	constructor(props){
		super(props)
		const count = props.shelter.shelter_items.find(itemCount => itemCount.item_id === props.item.id).inventory
		this.handleDelete = this.handleDelete.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.state={
			inventory: count,
			edit: false,
		}
	}

	handleDelete(event){
		event.preventDefault()
		const {deleteItem} = this.props
		const shelterItem = this.props.shelter.shelter_items.find(item => item.item_id == event.target.value)
		deleteItem(shelterItem.id)
	}

	handleClick(){
		this.setState({
			edit: true,
		})
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
		this.setState({
			edit: false
		})
	}

	render(){
		return (
			<Form id="manage-item-count-form" onSubmit={(event)=>this.handleSubmit(event)}>
				<Button onClick={this.handleDownCount}>-</Button>
				<input type='number' value={this.state.inventory} onChange={(event) => this.handleChange(event)}/>
				<Button onClick={this.handleUpCount}>+</Button>
				<input type='submit' />
				<Button type="submit" name={this.props.shelter.id} value={this.props.item.id} onClick={this.handleDelete}>Delete</Button>
			</Form>
		)
	}
}

export default connect(null, {updateShelterItem, deleteItem})(ManageItemCount)