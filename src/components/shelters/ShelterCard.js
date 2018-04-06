import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Col, Button} from 'react-bootstrap'

class ShelterCard extends Component {
	constructor(){
		super()
		this.state={
			count: 0,
		}
	}

	render(){
		return (
			<Col md={this.props.columnwidth} >
			<div className="card" style={{width: 25+'rem'}}>
				<div className="card-block">
					<div className="card-header"><Link key={this.props.shelter.id} to={`/shelters/${this.props.shelter.id}`}><h3>{this.props.shelter.name}</h3></Link></div>
					<img alt='' className="card-img-top" src={this.props.shelter.image} style={{width: 25+'rem', height: 17+'rem'}} />
					<div className="card-body">
						<p className="card-text">Address: {this.props.shelter.address}</p>
						<p className="card-text">Phone Number: {this.props.shelter.phone_number}</p>
					</div>
				</div>
				
			</div>
			</Col>
		)
	}
}

export default ShelterCard
