import React, {Component} from 'react'
import { connect } from 'react-redux'
import ItemGroupSection from '../../components/item_group/ItemGroupSection.js'

class ItemGroup extends Component {
	render(){
		const iGroups = this.props.item_groups.map(iG => <ItemGroupSection key={iG.id} item_group={iG} />)
		return(
			<div>
				{iGroups}
			</div>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
		item_groups: state.item_groups
	}
}
export default connect(mapStateToProps, {})(ItemGroup)