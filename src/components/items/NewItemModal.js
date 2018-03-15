import React, {Component} from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import {createItem} from '../../actions/items'
import {connect} from 'react-redux'

class NewItemModal extends Component {
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
      name: this.state.name,
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
  	return (
      <div>
        <p>Don't see the inventory item you need?</p>
        <Button bsStyle='info' bsSize='large' onClick={this.handleShow}>
          Create new item
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Item</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        		<Form onSubmit={(event)=> this.handleOnSubmit(event)}>
        			<div className="form-group form-row">
        				<label className="col-form-label">Item Name: </label>
        				<div className="">
        	          <input
        	          	className="form-control"
        	            type="text"
        	            placeholder="Item Name"
        	            name="name"
                      value={this.state.name}
        	            onChange={(event)=> this.handleOnChange(event)} />
        	    	</div>
              </div>
              <div className="form-group form-row">
                <label className="col-form-label">Item Description: </label>
                <div className="">
                    <textarea rows='4' cols='50'
                      className="form-control"
                      type="textarea"
                      placeholder="Item Description"
                      name="description"
                      value={this.state.description}
                      onChange={(event)=> this.handleOnChange(event)} />
                </div>
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

export default connect(null, {createItem})(NewItemModal)

