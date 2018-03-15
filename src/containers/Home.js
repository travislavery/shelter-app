import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Jumbotron, Grid, Col} from 'react-bootstrap'
import SheltersList from '../components/shelters/SheltersList'


class Home extends Component {
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
			</Grid>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
		shelters: state.shelters
	}
}

export default connect(mapStateToProps, {})(Home)