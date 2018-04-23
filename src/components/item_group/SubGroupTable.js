import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Table} from 'react-bootstrap'
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

  getShelterItemInfo(shelter_item, shelters) {
    return {id: shelter_item.id, shelter_name: this.getShelterName(shelter_item.shelter_id), inventory: shelter_item.inventory}
  }
  render(){
    const shelterItemArray = this.props.item.shelter_items
    const itemShelters = shelterItemArray.map(sItem => this.getShelterItemInfo(sItem))
    const tableRows = itemShelters.map(item => <ShelterLine key={item.id} count={item.inventory} shelter_name={item.shelter_name}/>)
  	return (
      <div>
        <h2>{this.props.item.description}</h2>
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
      </div>
  	)
  }
}


const mapStateToProps = (state, ownProps) => {
  //todo//
  console.log(state)
  //const groupItemIds = ownProps.items.map(item => item.id)
  const item = state.items.find(item => item.id === ownProps.item.id)
  return {
    shelters: state.shelters,
    item,
  }
}

export default connect(mapStateToProps, {})(SubGroupTable)