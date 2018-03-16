import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Jumbotron, Grid, Col} from 'react-bootstrap'
import {fetchItems} from '../actions/items'
import SheltersList from '../components/shelters/SheltersList'
import ItemStockpile from '../components/items/ItemStockpile'


class Home extends Component {
	constructor(){
		super()
		this.randomPicture = this.randomPicture.bind(this)
		this.state={
			filter: 'none'
		}
	}

	randomPicture(){
		return fetch(`https://picsum.photos/200`)
			.then(response => response.url)
	}

	

	render(){
		return(
			<Grid fluid>
				<Jumbotron id='home-jumbotron' className='jumbotron-fluid'>
					<Grid>
						<h1 className="display-4">Home</h1>
					</Grid>
					
				</Jumbotron>
				<Col md={4}>
					<SheltersList columnwidth={12} shelters={this.props.shelters}/>
				</Col>
				<Col md={8}>
					<ItemStockpile items={this.props.items} randomPicture={this.randomPicture}/>
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
	}
}

export default connect(mapStateToProps, {fetchItems})(Home)