import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Jumbotron, Grid, Col} from 'react-bootstrap'
import {fetchItems} from '../actions/items'
import SheltersList from '../components/shelters/SheltersList'
import ItemStockpile from '../components/items/ItemStockpile'
import ItemGroup from './items/ItemGroup'


class Home extends Component {
	constructor(){
		super()
		//this.randomPicture = this.randomPicture.bind(this)
		this.state={
			filter: 'none'
		}
	}

	// randomPicture(){
	// 	return fetch(`https://picsum.photos/200`)
	// 		.then(response => response.url)
	// }

	

	render(){
		const userShelters = this.props.shelters.filter(shelter => shelter.user.id == this.props.user.id)
		return(
			<Grid fluid>
				<Jumbotron id='home-jumbotron' className='jumbotron-fluid'>
					<Grid>
						<h1 className="display-4">Home</h1>
					</Grid>
					
				</Jumbotron>
				<Col md={4}>
					<h1>Your Shelters</h1>
					<SheltersList columnwidth={12} shelters={userShelters}/>
				</Col>
				<Col md={8}>
					<ItemGroup />
				</Col>
			</Grid>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
		shelters: state.shelters,
		items: state.items,
		picture_urls: state.picture_urls,
		user: state.user,
	}
}

export default connect(mapStateToProps, {fetchItems})(Home)
//<ItemStockpile items={this.props.items} shelters={this.props.shelters}/>