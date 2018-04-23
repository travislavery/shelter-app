import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table, Panel} from 'react-bootstrap'
import ShelterLine from './ShelterLine'

class SubGroupTable extends Component {
  constructor(props){
    super()
    this.state={
      filter: ''
    }
  }

  getShelterName = (id) => {
    const shelter = this.props.shelters.find(shelter => shelter.id === id)
    return shelter ? shelter.name : "Fetching name"
  } 

  getShelterItemInfo(shelter_item) {
    return {shelter_item: shelter_item, shelter_name: this.getShelterName(shelter_item.shelter_id)}
  }
  render(){
    debugger
    const shelterItemArray = this.props.item.shelter_items || []
    const itemShelters = shelterItemArray.map(sItem => this.getShelterItemInfo(sItem))
    const tableRows = itemShelters.map(item => <ShelterLine key={item.shelter_item.id} shelter_item={item.shelter_item} shelter_name={item.shelter_name}/>)
  	return (
      <Panel bsStyle="info">
        <Panel.Heading>
          <Panel.Title componentClass="h2">
            {this.props.item.description}
          </Panel.Title>
        </Panel.Heading>
        <Table striped hover bordered>
          <thead>
            <tr>
              <th scope='col'>Shelter</th>
              <th scope='col'>Inventory</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </Table>
      </Panel>
  	)
  }
}


const mapStateToProps = (state, ownProps) => {
  console.log(state)
  const item = state.items.find(item => item.id === ownProps.item.id) || {}
  return {
    shelters: state.shelters,
    item,
  }
}

export default connect(mapStateToProps, {})(SubGroupTable)