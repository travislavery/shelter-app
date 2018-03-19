import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {connect} from 'react-redux'


class ErrorModal extends Component {
  constructor(props, context){
    super(props, context)

    this.state={
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

  render(){
  	return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      		{this.props.errors}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
  	)
  }
}

export default connect(null, {})(ErrorModal)