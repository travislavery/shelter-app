import React, {Component} from 'react'
import {Button, Modal} from 'react-bootstrap'
import {connect} from 'react-redux'


class ErrorModal extends Component {
  constructor(props){
    super()
    this.handleShow = this.handleShow.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state={
      show: Array.isArray(props.errors) ? false : true
    }
  }

  componentWillReceiveProps(nextProps){
    //if (nextProps.errors.errorType !== this.props.errors.errorType || Array.isArray(this.props.errors)){
    this.setState({
      show: true
    })
    //}
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
          <Modal.Title>{this.props.errors.errorType} Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
      		{this.props.errors.message}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
  	)
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    errors: state.errors
  }
}

export default connect(mapStateToProps, {})(ErrorModal)