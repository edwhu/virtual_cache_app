import React, { PropTypes } from 'react';
import Device from './Device.js';
import {DeviceListStyle} from '../styles/DeviceListStyle.js'
const DeviceList = ({ devices, onDeviceClick}) => {
	return (
		<div style={DeviceListStyle}>
			<ul>
				{devices.map(device =>
					<Device
						key={device._id}
						name={device.name}
						selected={device.selected}
						onClick={() => onDeviceClick(device._id)}
						/>
				)}
			</ul>
		</div>
	);
};

DeviceList.propTypes = {
	devices: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		selected: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	onDeviceClick: PropTypes.func.isRequired
};

export default DeviceList;
