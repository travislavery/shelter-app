import React, {Component} from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import {createItem} from '../../actions/items'
import {connect} from 'react-redux'
import OptionItem from './OptionItem'

class ExistingItemsModal extends Component {
  constructor(props, context){
    super(props, context)

    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)

    this.state={
      name: '',
      description: '',
      show: false
    }
  }

  handleShow(){
    this.setState({
      show: true
    })
  }

  handleClose(){
    this.setState({
      show: false
    })
  }

  handleOnSubmit(event){
    event.preventDefault()
    const {createItem} = this.props
    createItem({
      group_name: this.state.name,
      description: this.state.description,
    }, this.props.shelter.id)
    this.setState({
      name: '',
      description: '',
      show: false,
    })
  }

  handleOnChange(event){
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    const itemOptionsName = this.props.item_groups ? this.props.item_groups.map(itemGroup=> <OptionItem key={itemGroup.id} attribute="name" item={itemGroup.name}/>) : <option>...</option>
    const itemOptionsDescription = this.props.items ? this.props.items.map(item=> <OptionItem key={item.id} attribute="description" item={item.description}/>) : <option>...</option>
  	return (
      <div>
        <p>Or pick from existing items</p>
        <Button bsStyle='info' bsSize='large' onClick={this.handleShow}>
          Pick existing item
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        		<Form onSubmit={(event)=> this.handleOnSubmit(event)}>
        			<div className="form-group form-row">
        				<label className="col-form-label">Item Group: </label>
        				<select className="form-control"
                  name="name"
                  onClick={event=>this.handleOnChange(event)}>
                  <option value="" disabled>Select a group...</option>
                  {itemOptionsName}
        	    	</select>
              </div>
              <div className="form-group form-row">
                <label className="col-form-label">Item Description: </label>
                <select 
                  className="form-control"
                  name="description"
                  onClick={event=>this.handleOnChange(event)}>
                    {itemOptionsDescription}
                </select>
              </div>
              <Button
                type="submit"
                className="btn btn-primary">
              	Create Item
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
  	)
  }
}

export default connect(null, {createItem})(ExistingItemsModal)