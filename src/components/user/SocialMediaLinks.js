import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const SocialMediaLinks = ({shelter}) => {
	return (
		<div id="social-media-links" className="btn-group-vertical">
			<Button bsStyle="info">Twitter</Button>
			<Button bsStyle="info">Instagram</Button>
			<Button bsStyle="info">Facebook</Button>
		</div>
	)
}

export default SocialMediaLinks