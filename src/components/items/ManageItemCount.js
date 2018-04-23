import React, {Component} from 'react';
import {Col, Button, Form, ButtonGroup, ButtonToolbar, InputGroup, FormGroup, FormControl} from 'react-bootstrap'
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

	getId = () => {
		return `manage-item-count-form-${this.props.item.id}`
	}

	render(){
		return (
			<Form id={this.getId()} onSubmit={(event)=>this.handleSubmit(event)}>
				<Col xs={5}>
					<FormGroup>
						<InputGroup>
							<InputGroup.Button>
								<Button onClick={this.handleDownCount}>-</Button>
							</InputGroup.Button>

							<InputGroup.Button>
								<Button onClick={this.handleUpCount}>+</Button>
							</InputGroup.Button>

							<FormControl type='number' value={this.state.inventory} onChange={(event) => this.handleChange(event)}/>
							
							<InputGroup.Button>
								<Button type='submit' form={this.getId()}>Submit</Button>
							</InputGroup.Button>

							<InputGroup.Button>
								<Button type="submit" name={this.props.shelter.id} value={this.props.item.id} onClick={this.handleDelete}>Delete</Button>
							</InputGroup.Button>
						</InputGroup>
					</FormGroup>
				</Col>
			</Form>
		)
	}
}

export default connect(null, {updateShelterItem, deleteItem})(ManageItemCount)