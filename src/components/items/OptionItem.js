import React from 'react'

const OptionItem = (props) => {
	return (
		<option value={props.item}>
			{props.item}
		</option>
	)
}

export default OptionItem
