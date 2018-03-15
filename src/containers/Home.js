import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Jumbotron} from 'react-bootstrap'


class Home extends Component {
	render(){
		return(
			<Jumbotron id='home-jumbotron' className='jumbotron-fluid'>
				<div className="container">
					<h1 className="display-4">Home</h1>
				</div>
			</Jumbotron>
		)
	}
}

export default connect(null, {})(Home)