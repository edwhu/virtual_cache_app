import React, { PropTypes } from 'react';
import {DeviceStyle} from '../styles/DeviceStyle';
const Device = ({onClick, selected, name}) => (
	<div style={{DeviceStyle}}>
		<li
			onClick={onClick}
			style={{textDecoration: selected ? 'underline' : 'none'}}
			>
			{name}
		</li>
	</div>
);

Device.propTypes = {
	onClick: PropTypes.func.isRequired,
	selected: PropTypes.bool.isRequired,
	name: PropTypes.string.isRequired
};

export default Device;
