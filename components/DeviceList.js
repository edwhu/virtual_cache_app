import React, { PropTypes } from 'react';
import Device from './Device.js';
import {DeviceListStyle} from '../styles/DeviceListStyle.js';
const DeviceList = ({ devices, onDeviceClick}) => {
	return (
		<div style={DeviceListStyle}>
			<h>All Devices</h>
			<ul>
				{devices.map(device =>
					<Device
						key={device._id}
						name={device.name}
						selected={device.selected}
						onClick={() => onDeviceClick(device._id, device.loc)}
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
