import React, { PropTypes } from 'react';
const Device = ({onClick, selected, name}) => (
	<li
		onClick={onClick}
		style={{backgroundColor: selected ? 'blue' : 'transparent'}}
	>
		{name}
	</li>
);

Device.propTypes = {
	onClick: PropTypes.func.isRequired,
	selected: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired
};

export default Device;
